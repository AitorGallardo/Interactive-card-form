import { useContext } from 'react';
import { useField } from './useField';
import { CreditCardContext } from '../context/CreditCardContext';

export const useInitForm = () => {
  const onChange = ({ field, value }) => {
    setCreditCardData((state) => ({ ...state, [field]: value }));
  };

  const { creditCardData, setCreditCardData } = useContext(CreditCardContext);

  const cardName = useField({
    type: 'text',
    val: creditCardData.name,
    customOnChange: ({ value }) => onChange({ field: 'name', value }),
  });
  const cardNumber = useField({
    type: 'number',
    val: creditCardData.number,
    customOnChange: ({ value }) => onChange({ field: 'number', value }),
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
