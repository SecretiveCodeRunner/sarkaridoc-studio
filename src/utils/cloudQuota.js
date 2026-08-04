/**
 * SarkariDoc Studio — Daily Cloud GPU Quota Manager
 * Grants 2 Free Cloud Edge GPU requests per day per device without requiring login/database.
 * Automatically falls back to In-Browser Engine when 2 uses are completed.
 */

const QUOTA_KEY = 'sarkaridoc_cloud_gpu_quota';
const MAX_DAILY_FREE_USES = 2;

const getTodayDateString = () => {
  return new Date().toISOString().split('T')[0];
};

export const getCloudGpuQuota = () => {
  const today = getTodayDateString();
  try {
    const raw = localStorage.getItem(QUOTA_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.date === today) {
        const used = Number(data.used) || 0;
        return {
          usedToday: used,
          usesLeft: Math.max(0, MAX_DAILY_FREE_USES - used),
          maxDaily: MAX_DAILY_FREE_USES,
          isEligible: used < MAX_DAILY_FREE_USES
        };
      }
    }
  } catch (err) {
    console.warn('Quota check error:', err);
  }

  // Reset for new day or new device
  return {
    usedToday: 0,
    usesLeft: MAX_DAILY_FREE_USES,
    maxDaily: MAX_DAILY_FREE_USES,
    isEligible: true
  };
};

export const incrementCloudGpuQuota = () => {
  const today = getTodayDateString();
  const current = getCloudGpuQuota();
  const newUsed = current.usedToday + 1;

  try {
    localStorage.setItem(QUOTA_KEY, JSON.stringify({
      date: today,
      used: newUsed
    }));
  } catch (err) {
    console.warn('Quota save error:', err);
  }

  return {
    usedToday: newUsed,
    usesLeft: Math.max(0, MAX_DAILY_FREE_USES - newUsed),
    maxDaily: MAX_DAILY_FREE_USES,
    isEligible: newUsed < MAX_DAILY_FREE_USES
  };
};
