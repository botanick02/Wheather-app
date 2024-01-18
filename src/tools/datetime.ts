export const getDayOfWeek = (date?: Date): string => {
  date ??= new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};

export const toTwoDigits = (number: number): string => {
  return number > 10 ? number.toString() : "0" + number.toString();
};
