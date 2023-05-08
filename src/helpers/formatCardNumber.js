const cardNumberRegex =
  '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$';
export const formatField = (value) => {
  console.log('value?', value);
  // Remove all non-numeric characters from the value
  const idk = value.replace(/\D/g, '');
  console.log('idk', idk);
  if (idk.length < 3) {
    console.log('VALUEVALUE', value);
    return value;
  }
  // Format the value as groups of four digits separated by spaces
  const matches = value.match(/\d{4}/g);
  console.log('matches', matches);
  const formattedValue = matches ? matches.join(' ') : '';
  console.log('formatedvalue', formattedValue);
  return formattedValue;
};
