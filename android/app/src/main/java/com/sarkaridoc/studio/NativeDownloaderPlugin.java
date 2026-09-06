package com.sarkaridoc.studio;

import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.widget.Toast;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

@CapacitorPlugin(name = "NativeDownloader")
public class NativeDownloaderPlugin extends Plugin {

    @PluginMethod
    public void saveToDownloads(PluginCall call) {
        String base64Data = call.getString("base64");
        String fileName = call.getString("fileName");
        String mimeType = call.getString("mimeType", "application/octet-stream");

        if (base64Data == null || fileName == null) {
            call.reject("Missing base64 or fileName parameter");
            return;
        }

        // Strip data URI prefix if present
        if (base64Data.contains(",")) {
            base64Data = base64Data.substring(base64Data.indexOf(",") + 1);
        }

        try {
            byte[] bytes = Base64.decode(base64Data, Base64.DEFAULT);
            Uri savedUri = null;
            Context context = getContext();

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                ContentValues values = new ContentValues();
                values.put(MediaStore.MediaColumns.DISPLAY_NAME, fileName);
                values.put(MediaStore.MediaColumns.MIME_TYPE, mimeType);

                Uri collection;
                if (mimeType.startsWith("image/")) {
                    collection = MediaStore.Images.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY);
                    values.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/SarkariDoc");
                } else {
                    collection = MediaStore.Downloads.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY);
                    values.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/SarkariDoc");
                }

                savedUri = context.getContentResolver().insert(collection, values);
                if (savedUri != null) {
                    try (OutputStream os = context.getContentResolver().openOutputStream(savedUri)) {
                        if (os != null) {
                            os.write(bytes);
                            os.flush();
                        }
                    }
                }
            } else {
                File dir = new File(
                    Environment.getExternalStoragePublicDirectory(
                        mimeType.startsWith("image/") ? Environment.DIRECTORY_PICTURES : Environment.DIRECTORY_DOWNLOADS
                    ),
                    "SarkariDoc"
                );
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                File file = new File(dir, fileName);
                try (FileOutputStream fos = new FileOutputStream(file)) {
                    fos.write(bytes);
                    fos.flush();
                }
                savedUri = Uri.fromFile(file);
                MediaScannerConnection.scanFile(context, new String[]{file.getAbsolutePath()}, new String[]{mimeType}, null);
            }

            final String savedLocation = mimeType.startsWith("image/") ? "Pictures/SarkariDoc" : "Downloads/SarkariDoc";
            if (getActivity() != null) {
                getActivity().runOnUiThread(() -> {
                    Toast.makeText(context, "Saved to " + savedLocation + "/" + fileName, Toast.LENGTH_LONG).show();
                });
            }

            JSObject ret = new JSObject();
            ret.put("success", true);
            ret.put("fileName", fileName);
            ret.put("uri", savedUri != null ? savedUri.toString() : "");
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to save file: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void shareFile(PluginCall call) {
        String base64Data = call.getString("base64");
        String fileName = call.getString("fileName");
        String mimeType = call.getString("mimeType", "application/octet-stream");

        if (base64Data == null || fileName == null) {
            call.reject("Missing base64 or fileName parameter");
            return;
        }

        if (base64Data.contains(",")) {
            base64Data = base64Data.substring(base64Data.indexOf(",") + 1);
        }

        try {
            byte[] bytes = Base64.decode(base64Data, Base64.DEFAULT);
            Context context = getContext();
            File cacheDir = new File(context.getCacheDir(), "shared_exports");
            if (!cacheDir.exists()) {
                cacheDir.mkdirs();
            }

            File destFile = new File(cacheDir, fileName);
            try (FileOutputStream fos = new FileOutputStream(destFile)) {
                fos.write(bytes);
                fos.flush();
            }

            Uri fileUri = FileProvider.getUriForFile(
                context,
                context.getPackageName() + ".fileprovider",
                destFile
            );

            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType(mimeType);
            intent.putExtra(Intent.EXTRA_STREAM, fileUri);
            intent.putExtra(Intent.EXTRA_SUBJECT, fileName);
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

            Intent chooser = Intent.createChooser(intent, "Share " + fileName);
            chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(chooser);

            JSObject ret = new JSObject();
            ret.put("success", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to share file: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void shareAppApk(PluginCall call) {
        try {
            Context context = getContext();
            ApplicationInfo appInfo = context.getApplicationInfo();
            File originalApk = new File(appInfo.sourceDir);

            if (!originalApk.exists()) {
                call.reject("Original APK package not found on device");
                return;
            }

            File cacheDir = new File(context.getCacheDir(), "shared_apk");
            if (!cacheDir.exists()) {
                cacheDir.mkdirs();
            }

            File destApk = new File(cacheDir, "SarkariDoc_Studio.apk");
            try (InputStream in = new FileInputStream(originalApk);
                 OutputStream out = new FileOutputStream(destApk)) {
                byte[] buffer = new byte[16384];
                int bytesRead;
                while ((bytesRead = in.read(buffer)) != -1) {
                    out.write(buffer, 0, bytesRead);
                }
                out.flush();
            }

            Uri apkUri = FileProvider.getUriForFile(
                context,
                context.getPackageName() + ".fileprovider",
                destApk
            );

            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("application/vnd.android.package-archive");
            intent.putExtra(Intent.EXTRA_STREAM, apkUri);
            intent.putExtra(Intent.EXTRA_SUBJECT, "SarkariDoc Studio APK");
            intent.putExtra(Intent.EXTRA_TEXT, "Here is the SarkariDoc Studio Android App! 100% offline exam photo resizer & PDF suite.\nWeb app: https://sarkaridoc-studio.document-resizer.workers.dev");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

            Intent chooser = Intent.createChooser(intent, "Share SarkariDoc Studio APK");
            chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(chooser);

            JSObject ret = new JSObject();
            ret.put("success", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Could not share APK: " + e.getMessage(), e);
        }
    }
}
