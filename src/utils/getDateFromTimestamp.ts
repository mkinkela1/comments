export const getDateFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  const today = new Date();
  if (
    day === today.getDate() &&
    month === today.getMonth() + 1 &&
    year === today.getFullYear()
  ) {
    return "Today";
  }

  return `${dayName}, ${day}.${month}.${year}.`;
};
