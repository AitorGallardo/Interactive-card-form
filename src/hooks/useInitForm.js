import { useContext } from 'react';
import { useField } from './useField';
import { CreditCardContext } from '../context/CreditCardContext';
import { formatCardNumber } from '../helpers/formatCardNumber';
import { formatMaxNumberLength } from '../helpers/formatMaxNumber';
import { formatMonthNumber } from '../helpers/formatMonthNumber';

export const useInitForm = () => {
  const resetPristine = () => {
    handleCardNamePristine();
    handleCardNumberPristine();
    handleCardMonthPristine();
    handleCardYearPristine();
    handleCardCvcPristine();
  };

  const setCardNumberValid = (value)=>{
    handleCardNumberValid(value)
  }
  const setCardCvcValid = (value)=>{
    handleCardCvcValid(value)
  }


  const onChange = ({ field, value }) => {
    setCreditCardData((state) => ({ ...state, [field]: value }));
    return value;
  };

  const onChangeCardNumber = ({ field, value }) => {
    const formatedNumber = formatCardNumber(value);
    return onChange({ field, value: formatedNumber });
  };
  const onChangeFormatNumberLength = ({ field, value, maxNumber }) => {
    const formatedNumber = formatMaxNumberLength(value, maxNumber);
    return onChange({ field, value: formatedNumber });
  };
  const onChangeFormatMonthNumber = ({ field, value, maxNumber }) => {
    const formatedNumber = formatMaxNumberLength(value, maxNumber);
    const formatedMonthNumber = formatMonthNumber(formatedNumber);
    return onChange({ field, value: formatedMonthNumber });
  };

  const { creditCardData, setCreditCardData } = useContext(CreditCardContext);

  const { handlePristine: handleCardNamePristine,handleValid: handleCardNameValid, ...cardName } = useField({
    type: 'text',
    val: creditCardData.name,
    customOnChange: ({ value }) => onChange({ field: 'name', value }),
  });
  const { handlePristine: handleCardNumberPristine,handleValid: handleCardNumberValid, ...cardNumber } = useField({
    type: 'text',
    val: creditCardData.number,
    customOnChange: ({ value }) =>
      onChangeCardNumber({ field: 'number', value }),
  });
  const { handlePristine: handleCardMonthPristine,handleValid: handleCardMonthValid, ...cardMonth } = useField({
    type: 'number',
    val: creditCardData.month,
    customOnChange: ({ value }) =>
      onChangeFormatMonthNumber({ field: 'month', value, maxNumber: 2 }),
  });
  const { handlePristine: handleCardYearPristine,handleValid: handleCardYearValid, ...cardYear } = useField({
    type: 'number',
    val: creditCardData.year,
    customOnChange: ({ value }) =>
      onChangeFormatNumberLength({ field: 'year', value, maxNumber: 2 }),
  });
  const { handlePristine: handleCardCvcPristine,handleValid: handleCardCvcValid, ...cardCvc } = useField({
    type: 'number',
    val: creditCardData.cvc,
    customOnChange: ({ value }) =>
      onChangeFormatNumberLength({ field: 'cvc', value, maxNumber: 4 }),
  });
  return {
    cardName,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvc,
    resetPristine,
    setCardNumberValid,
    setCardCvcValid
  };
};
