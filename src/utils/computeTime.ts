export const computeTime = (nowTime: Date, targetTime: Date) => {
  const timeDiff = nowTime.getTime() - targetTime.getTime();
  if (timeDiff >= 86400000) {
    // 1 day in milliseconds
    const daysDiff = Math.floor(timeDiff / 86400000);
    return `${daysDiff} 天前`;
  } else if (timeDiff >= 3600000) {
    // 1 hour in milliseconds
    const hoursDiff = Math.floor(timeDiff / 3600000);
    return `${hoursDiff} 小時前`;
  } else {
    const minutesDiff = Math.floor(timeDiff / 60000); // 1 minute in milliseconds
    return `${minutesDiff} 分鐘前`;
  }
};
