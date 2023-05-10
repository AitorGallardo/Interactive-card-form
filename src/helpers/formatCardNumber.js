
export const formatCardNumber = (value) => {
  // Remove all non-digit characters from the input string
  const digitsOnly = value.replace(/\D/g, '');

  // Split the string into groups of 4 digits
  const groups = digitsOnly.match(/.{1,4}/g);

  // Join the groups with spaces and return the result
  return groups ? groups.join(' ') : '';
};
