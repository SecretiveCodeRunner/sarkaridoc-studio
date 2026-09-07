/**
 * SarkariDoc Studio - On-Device Work History Storage
 * Powered by client-side IndexedDB for zero-quota limits, privacy, and fast offline access.
 */

const DB_NAME = 'sarkaridoc_studio_db';
const DB_VERSION = 1;
const STORE_NAME = 'work_history';
const MAX_HISTORY_ITEMS = 50; // Cap to keep device storage clean

let dbPromise = null;

function getDB() {
  if (typeof window === 'undefined' || !window.indexedDB) {
    return Promise.reject(new Error('IndexedDB not supported'));
  }

  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
          store.createIndex('tool', 'tool', { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  return dbPromise;
}

/**
 * Creates a low-res image thumbnail (max 140x140) from a blob for instant UI rendering.
 */
export async function createThumbnail(blob, mimeType) {
  if (!blob || !mimeType || !mimeType.startsWith('image/')) {
    return null;
  }

  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      try {
        const maxDim = 140;
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(width, 1);
        canvas.height = Math.max(height, 1);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const thumbUrl = canvas.toDataURL('image/jpeg', 0.7);
        URL.revokeObjectURL(url);
        resolve(thumbUrl);
      } catch {
        URL.revokeObjectURL(url);
        resolve(null);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };

    img.src = url;
  });
}

/**
 * Saves a completed export into the on-device history store.
 */
export async function saveHistoryItem({
  tool,
  toolName,
  fileName,
  fileSize,
  mimeType,
  blob,
  presetName = '',
}) {
  try {
    const db = await getDB();
    const id = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const thumbnail = await createThumbnail(blob, mimeType);

    const record = {
      id,
      timestamp: Date.now(),
      tool: tool || 'document',
      toolName: toolName || 'Document Export',
      fileName: fileName || 'document',
      fileSize: Number(fileSize) || (blob ? blob.size : 0),
      mimeType: mimeType || (blob ? blob.type : 'application/octet-stream'),
      presetName: presetName || '',
      thumbnail: thumbnail || null,
      blob: blob || null,
    };

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const addReq = store.add(record);

      addReq.onsuccess = () => {
        // Enforce max item cap
        pruneOldHistory(db);
        resolve(record);
      };

      addReq.onerror = () => reject(addReq.error);
    });
  } catch (err) {
    console.debug('Failed to save work to history:', err);
    return null;
  }
}

/**
 * Prunes history to keep at most MAX_HISTORY_ITEMS.
 */
async function pruneOldHistory(db) {
  try {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const countReq = store.count();

    countReq.onsuccess = () => {
      if (countReq.result > MAX_HISTORY_ITEMS) {
        const index = store.index('timestamp');
        const openCursor = index.openCursor();
        let deleted = 0;
        const toDelete = countReq.result - MAX_HISTORY_ITEMS;

        openCursor.onsuccess = (e) => {
          const cursor = e.target.result;
          if (cursor && deleted < toDelete) {
            store.delete(cursor.primaryKey);
            deleted++;
            cursor.continue();
          }
        };
      }
    };
  } catch {
    // Ignore prune errors
  }
}

/**
 * Retrieves all history items sorted newest first.
 */
export async function getHistoryItems() {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('timestamp');
      const request = index.getAll();

      request.onsuccess = () => {
        // Sort newest first
        const items = (request.result || []).sort((a, b) => b.timestamp - a.timestamp);
        resolve(items);
      };

      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.debug('Error getting history items:', err);
    return [];
  }
}

/**
 * Deletes a single history item by ID.
 */
export async function deleteHistoryItem(id) {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.debug('Error deleting history item:', err);
    return false;
  }
}

/**
 * Clears all items in history.
 */
export async function clearAllHistory() {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.debug('Error clearing history:', err);
    return false;
  }
}
