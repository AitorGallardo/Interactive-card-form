export const formatMonthNumber = (number) => {
    if(!number) return '';
    return number < 1 ? 1 : number > 12 ? 12 : number;
  };
