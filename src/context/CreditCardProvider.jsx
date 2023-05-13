import { useState } from 'react';
import { CreditCardContext } from './CreditCardContext';

const initCreditCard = {
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: '',
  isSuccessSubmit: false,
  isFirstRender:true,
};

export const CreditCardProvider = ({ children }) => {
  const [creditCardData, setCreditCardData] = useState(initCreditCard);

  return (
    <CreditCardContext.Provider value={{ creditCardData, setCreditCardData,initCreditCard }}>
      {children}
    </CreditCardContext.Provider>
  );
};
