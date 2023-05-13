export const formatMaxNumberLength = (value, maxNumber = 2) => {
  return value.length > maxNumber ? value.slice(0, maxNumber) : value;
};
