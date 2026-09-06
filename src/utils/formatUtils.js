/**
 * Universal file size formatting helper.
 * For files >= 1 MB (1,048,576 bytes / 1,024 KB), displays in MB (e.g., "11 MB", "1.5 MB")
 * rather than high KB numbers (e.g. "11000 KB").
 * 
 * @param {number|string} size - Size value
 * @param {'bytes'|'kb'|'mb'} [unit='bytes'] - Input unit of the size
 * @returns {string} Formatted string with appropriate unit
 */
export function formatFileSize(size, unit = 'bytes') {
  const num = Number(size);
  if (isNaN(num) || num <= 0) return '0 KB';

  let bytes = num;
  if (unit === 'kb') {
    bytes = num * 1024;
  } else if (unit === 'mb') {
    bytes = num * 1024 * 1024;
  }

  const ONE_MB = 1024 * 1024;
  if (bytes >= ONE_MB) {
    const mb = bytes / ONE_MB;
    const formatted = mb >= 10 || (Math.round(mb * 10) % 10 === 0)
      ? Math.round(mb)
      : mb.toFixed(1);
    return `${formatted} MB`;
  }

  const kb = bytes / 1024;
  const formatted = kb >= 10 || (Math.round(kb * 10) % 10 === 0)
    ? Math.round(kb)
    : kb.toFixed(1);
  return `${formatted} KB`;
}
