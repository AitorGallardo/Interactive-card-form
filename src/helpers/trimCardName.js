export const trimCardName = (value) => {
  const isString = typeof value === 'string';
  if (isString) {
    return value.trim();
  }
  console.assert(isString, 'Expected card name to be a string on function trimCardName()');
  return value;
};
