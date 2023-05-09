import { useState } from "react";
import { CreditCardContext } from "./CreditCardContext";


const initCreditCard = {
  name: 'Jane Appleseed',
  number: '0000000000000000',
  date1: '00',
  date2: '00',
  cvc: '000',
}

export const CreditCardProvider = ({ children }) => {
  const [creditCardData, setCreditCardData] = useState(initCreditCard);

  return (
    <CreditCardContext.Provider value={{ creditCardData, setCreditCardData }}>
      {children}
    </CreditCardContext.Provider>
  );
};