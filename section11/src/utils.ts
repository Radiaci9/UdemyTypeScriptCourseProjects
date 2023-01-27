export const dateStringToDate = (dateString: string): Date => {
  const day = parseInt(dateString.substring(0, 2));
  const monthIndex = parseInt(dateString.substring(3, 5));
  const year = parseInt(dateString.substring(6));

  return new Date(Date.UTC(year, monthIndex - 1, day));
}
