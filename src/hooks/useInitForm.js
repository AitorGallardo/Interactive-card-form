import { useContext } from 'react';
import { useField } from './useField';
import { CreditCardContext } from '../context/CreditCardContext';
import { formatCardNumber } from '../helpers/formatCardNumber';

export const useInitForm = () => {

  const onChange = ({ field, value }) => {
    setCreditCardData((state) => ({ ...state, [field]: value }));
    return value;
  };

  const onChangeCardNumber = ({ field, value }) => {
    const fromatedValue = formatCardNumber(value);
    return onChange({ field, value:fromatedValue });
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
    customOnChange: ({ value }) => onChangeCardNumber({ field: 'number', value }),
  });
  const cardDate1 = useField({
    type: 'number',
    val: creditCardData.date1,
    customOnChange: ({ value }) => onChange({ field: 'date1', value }),
  });
  const cardDate2 = useField({
    type: 'number',
    val: creditCardData.date2,
    customOnChange: ({ value }) => onChange({ field: 'date2', value }),
  });
  const cardCvc = useField({
    type: 'number',
    val: creditCardData.cvc,
    customOnChange: ({ value }) => onChange({ field: 'cvc', value }),
  });
  return {
    cardName,
    cardNumber,
    cardDate1,
    cardDate2,
    cardCvc,
  };
};
