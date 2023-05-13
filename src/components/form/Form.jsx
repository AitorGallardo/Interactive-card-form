import './Form.css';
import { Input } from '../input/Input';
import { useInitForm } from '../../hooks/useInitForm';
import { trimCardName } from '../../helpers/trimCardName';
import { isValidExpirationDate } from '../../helpers/isValidExpirationDate';
import { DateInput } from '../dateInput/DateInput';
import { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { useContext } from 'react';
import { CreditCardContext } from '../../context/CreditCardContext';
import { formatCardNumberNoSpaces } from '../../helpers/formatCardNumber';

export const Form = () => {
  const { creditCardData, setCreditCardData } = useContext(CreditCardContext);

  const {
    cardName,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvc,
    resetPristine,
    setCardNumberValid,
    setCardCvcValid,
  } = useInitForm();
  const [isValidDate, setValidDate] = useState(true);

  const { isFirstRender } = creditCardData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('data', data);

    triggerRequiredForm(form);

    const isValidForm = checkFormValidation(data);

    if (isValidForm) {
      const inputs = form.querySelectorAll('input');
      inputs.forEach((input) => {
        input.value = '';
        input.required = false;
        Simulate.change(input);
        resetPristine();
      });
      showSuccesSubmitMessage();
    }
  };

  // This is a solution to not trigger error input css on first log in the form cause they are blank.
  const triggerRequiredForm = (form) => {
    Array.from(form.elements).map((el) => {
      el.required = true;
      // Simulation an on change on input to get validity values on components and then display erros based on them
      Simulate.change(el);
    });
  };

  const showSuccesSubmitMessage = () => {
    if (isFirstRender) {
      setCreditCardData((state) => ({ ...state, isFirstRender: false }));
    }
    setCreditCardData((state) => ({ ...state, isSuccessSubmit: true }));
    const submitMessageTimer = setTimeout(() => {
      setCreditCardData((state) => ({ ...state, isSuccessSubmit: false }));
      clearTimeout(submitMessageTimer);
    }, 2500);
  };
  const checkFormValidation = ({
    cardholderName,
    number,
    month,
    year,
    cvc,
  }) => {
    console.log('con todo ', {
      cardholderName,
      number,
      month,
      year,
      cvc,
    });
    number = formatCardNumberNoSpaces(number);
    const isValidCardholderName = cardholderName.length > 0;
    const isValidNumber = number.length >= 16;
    const isValidCvc = cvc.length >= 3 && cvc.length <= 4;
    const hasDate = month.length > 0 && year.length > 0;
    let isValidDate = false;

    if (!isValidCvc) {
      setCardCvcValid({ isValid: false, outOfRange: true });
    }
    if (!isValidNumber) {
      setCardNumberValid({ isValid: false, outOfRange: true });
    }
    if (hasDate) {
      isValidDate = isValidExpirationDate(month, year);
      setValidDate(isValidDate);
    }

    return isValidCardholderName && isValidNumber && isValidCvc && isValidDate;
  };

  const handleNameInputBlur = (event) => {
    const value = event.target.value;
    event.target.value = trimCardName(value);
  };

  return (
    <form className='form__container' onSubmit={handleSubmit} noValidate>
      <Input
        id='cardholderName'
        name='cardholderName'
        label='cardholder name'
        placeholder='e.g. Jane Appleseed'
        pattern='^[A-Za-z ]+$'
        maxLength={30}
        onBlur={handleNameInputBlur}
        {...cardName}
      />
      <Input
        id='number'
        name='number'
        label='card number'
        placeholder='e.g. 1234 6578 9123 0000'
        maxLength={19}
        {...cardNumber}
      />
      <div className='form__third-row'>
        <DateInput
          month={cardMonth}
          year={cardYear}
          isValidDate={isValidDate}
        />
        <div className='form__third-row__second-field'>
          <Input
            id='cvc'
            name='cvc'
            label='cvc'
            placeholder='eg. 123'
            min='100'
            max='9999'
            {...cardCvc}
          />
        </div>
      </div>
      <button type='submit'>Confirm</button>
    </form>
  );
};
