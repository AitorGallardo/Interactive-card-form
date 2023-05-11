import { useContext } from 'react';
import { useField } from './useField';
import { CreditCardContext } from '../context/CreditCardContext';
import { formatCardNumber } from '../helpers/formatCardNumber';
import { formatMaxNumber } from '../helpers/formatMaxNumber';

export const useInitForm = () => {
  const onChange = ({ field, value }) => {
    setCreditCardData((state) => ({ ...state, [field]: value }));
    return value;
  };

  const onChangeCardNumber = ({ field, value }) => {
    const fromatedValue = formatCardNumber(value);
    return onChange({ field, value: fromatedValue });
  };
  const onChangeMaxNumber = ({ field, value, maxNumber }) => {
    const fromatedValue = formatMaxNumber(value, maxNumber);
    return onChange({ field, value: fromatedValue });
  };

  const { creditCardData, setCreditCardData } = useContext(CreditCardContext);

  const cardName = useField({
    type: 'text',
    val: creditCardData.name,
    customOnChange: ({ value }) => onChange({ field: 'name', value }),
  });
  const cardNumber = useField({
    type: 'text',
    val: creditCardData.number,
    customOnChange: ({ value }) =>
      onChangeCardNumber({ field: 'number', value }),
  });
  const cardMonth = useField({
    type: 'number',
    val: creditCardData.date1,
    customOnChange: ({ value }) =>
      onChangeMaxNumber({ field: 'month', value, maxNumber: 2 }),
  });
  const cardYear = useField({
    type: 'number',
    val: creditCardData.date2,
    customOnChange: ({ value }) =>
      onChangeMaxNumber({ field: 'year', value, maxNumber: 2 }),
  });
  const cardCvc = useField({
    type: 'number',
    val: creditCardData.cvc,
    customOnChange: ({ value }) =>
      onChangeMaxNumber({ field: 'cvc', value, maxNumber: 4 }),
  });
  return {
    cardName,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvc,
  };
};
