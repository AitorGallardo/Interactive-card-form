export const formatMaxNumber = (event, maxNumber=2) => {
  const input = event.currentTarget;
  if (input.value.length > maxNumber)
    input.value = input.value.slice(0, maxNumber);
};
