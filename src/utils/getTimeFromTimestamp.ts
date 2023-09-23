export const getTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const hoursWithLeadingZero = String(hours).padStart(2, "0");
  const minutesWithLeadingZero = String(minutes).padStart(2, "0");

  return `${hoursWithLeadingZero}:${minutesWithLeadingZero} ${ampm}`;
};
