export function isValidExpirationDate(month, year) {
  // We do -1 cause Date constructor's month argument is zero-based
  const inputDate = new Date(Number(year) + 2000, Number(month) - 1);

  const now = new Date();

  const minDate = new Date(now.getFullYear() - 5, now.getMonth());
  const maxDate = new Date(now.getFullYear() + 5, now.getMonth());

  return inputDate >= minDate && inputDate <= maxDate;
}
