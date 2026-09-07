import React, { useState, useEffect } from 'react';
import { 
  History, Download, Share2, Trash2, FileText, Camera, 
  Wand2, Sliders, Clock, AlertCircle, Sparkles 
} from 'lucide-react';
import { getHistoryItems, deleteHistoryItem, clearAllHistory } from '../../utils/historyStore';
import { downloadFile, shareFileNative } from '../../utils/downloadHelper';
import { formatFileSize } from '../../utils/formatUtils';

export const AndroidHistoryScreen = ({
  onOpenPassportPhoto,
  onOpenImageToPdf,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all' | 'photo' | 'pdf'
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const historyList = await getHistoryItems();
      setItems(historyList);
    } catch (e) {
      console.debug('Error loading history:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleDelete = async (id, e) => {
    e?.stopPropagation();
    const ok = await deleteHistoryItem(id);
    if (ok) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleClearAll = async () => {
    const ok = await clearAllHistory();
    if (ok) {
      setItems([]);
      setShowClearConfirm(false);
    }
  };

  const handleDownload = async (item, e) => {
    e?.stopPropagation();
    if (!item.blob) return;
    await downloadFile({
      blob: item.blob,
      filename: item.fileName,
      mimeType: item.mimeType,
      historyMeta: {
        tool: item.tool,
        toolName: item.toolName,
        presetName: item.presetName,
      },
    });
  };

  const handleShare = async (item, e) => {
    e?.stopPropagation();
    if (!item.blob) return;
    await shareFileNative({
      blob: item.blob,
      filename: item.fileName,
      mimeType: item.mimeType,
    });
  };

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'pdf') return item.fileName?.endsWith('.pdf') || item.tool?.includes('pdf');
    if (filter === 'photo') return !item.fileName?.endsWith('.pdf') && !item.tool?.includes('pdf');
    return true;
  });

  const getToolIcon = (tool, isPdf) => {
    if (isPdf) return FileText;
    if (tool === 'passport-photo') return Camera;
    if (tool === 'bg-remover') return Wand2;
    if (tool === 'image-resizer') return Sliders;
    return Sparkles;
  };

  const formatTimestamp = (ts) => {
    if (!ts) return '';
    const date = new Date(ts);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (isToday) {
      return `Today at ${timeStr}`;
    }
    return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} · ${timeStr}`;
  };

  return (
    <div className="space-y-4 px-4 py-3 pb-28 max-w-lg mx-auto select-none">
      
      {/* 1. Header Banner & Clear All Action */}
      <div className="flex items-center justify-between px-1">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
              Work History
            </h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Your saved photos, certificates &amp; PDFs on this device
          </p>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            onClick={() => setShowClearConfirm(true)}
            className="text-[11px] font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 px-2.5 py-1.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-transparent hover:border-rose-200 dark:hover:border-rose-800 transition-all flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* 2. Filter Chips */}
      {items.length > 0 && (
        <div className="flex items-center space-x-2 pt-0.5">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Files ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('photo')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'photo'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Photos &amp; Signs
          </button>
          <button
            type="button"
            onClick={() => setFilter('pdf')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'pdf'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            PDF Documents
          </button>
        </div>
      )}

      {/* 3. Empty State */}
      {!loading && items.length === 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 text-center space-y-4 shadow-xs mt-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto border border-blue-100 dark:border-blue-900/40 shadow-xs">
            <History className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
              No Saved Works Yet
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
              When you download formatted passport photos, resized signatures, or merged PDFs, they will automatically be saved here so you can re-download or share them anytime.
            </p>
          </div>

          {/* Quick Launch Cards */}
          <div className="pt-2 grid grid-cols-2 gap-2 text-left">
            <button
              type="button"
              onClick={onOpenPassportPhoto}
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-200 dark:border-slate-700 transition-all flex flex-col justify-between space-y-2 group"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Passport Photo
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Make official 3.5×4.5 cm</p>
              </div>
            </button>

            <button
              type="button"
              onClick={onOpenImageToPdf}
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 border border-slate-200 dark:border-slate-700 transition-all flex flex-col justify-between space-y-2 group"
            >
              <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Image to PDF
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Under 200 KB marksheet</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* 4. History Items List */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isPdf = item.fileName?.endsWith('.pdf') || item.mimeType === 'application/pdf';
          const Icon = getToolIcon(item.tool, isPdf);

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-3.5 shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all space-y-3"
            >
              <div className="flex items-start space-x-3">
                {/* Visual Thumbnail or Icon */}
                <div className="w-13 h-13 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.fileName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon className={`w-6 h-6 ${isPdf ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`} />
                  )}
                  {/* Subtle tool mini badge */}
                  <div className={`absolute bottom-0.5 right-0.5 p-0.5 rounded-full ${isPdf ? 'bg-emerald-600' : 'bg-blue-600'} text-white shadow-xs`}>
                    <Icon className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.toolName}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTimestamp(item.timestamp)}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-xs truncate mt-0.5" title={item.fileName}>
                    {item.fileName}
                  </h4>

                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="px-2 py-0.2 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                      {formatFileSize(item.fileSize)}
                    </span>
                    {item.presetName && (
                      <span className="px-2 py-0.2 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[10px] font-semibold text-blue-700 dark:text-blue-300 truncate max-w-[140px]">
                        {item.presetName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center space-x-2">
                  {/* Re-Download / Save to Phone */}
                  <button
                    type="button"
                    onClick={(e) => handleDownload(item, e)}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold flex items-center space-x-1.5 shadow-xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save to Phone</span>
                  </button>

                  {/* Share */}
                  <button
                    type="button"
                    onClick={(e) => handleShare(item, e)}
                    className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700"
                    title="Share File"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Delete */}
                <button
                  type="button"
                  onClick={(e) => handleDelete(item.id, e)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 active:scale-95 transition-all"
                  title="Remove from History"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Clear All Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 max-w-xs w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Clear All Work History?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                This will remove all {items.length} saved records from your on-device history. Files already saved to your Downloads or Gallery will not be affected.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="py-2.5 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleClearAll}
                className="py-2.5 px-3 rounded-2xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
