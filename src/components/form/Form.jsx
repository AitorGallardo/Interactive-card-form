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

export const Form = () => {
  const { creditCardData, setCreditCardData } = useContext(CreditCardContext);

  const { cardName, cardNumber, cardMonth, cardYear, cardCvc } = useInitForm();
  const [isValidDate, setValidDate] = useState(true);

  const {isSuccessSubmit,isFirstRender} = creditCardData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // Array.from(form.elements).map((el) => {
    //   el.required = true;
    //   // Simulation an on change on input to get validity values on components and then display erros based on them
    //   Simulate.change(el);
    // });

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('data', data);

    const isValidForm = checkFormValidation(data);
    if(isFirstRender){
      setCreditCardData((state)=>({...state,isFirstRender:false}))
    }
    setCreditCardData((state) => ({ ...state, isSuccessSubmit:true }));
    setTimeout(function() {
      setCreditCardData((state) => ({ ...state, isSuccessSubmit:false }));
      // Code to execute after 2.5 seconds
    }, 2500);
    if (isValidForm) {

    }
  };

  const checkFormValidation = ({ carholderName, number, month, year, cvc }) => {
    const isValidCardholderName = carholderName.length > 0;
    const isValidNumber = number.lenght >= 16;
    const isValidCvc = cvc.length >= 3 && cvc.length <= 4;

    const hasDate = month && year;

    const isValidDate = hasDate ? isValidExpirationDate(month, year) : false;
    setValidDate(isValidDate);

    return isValidCardholderName && isValidNumber && isValidCvc & isValidDate;
  };

  const handleNameInputBlur = (event) => {
    const value = event.target.value;
    event.target.value = trimCardName(value);
  };

  return (
    <form className='form__container' onSubmit={handleSubmit} noValidate>
      <Input
        id='carholderName'
        name='carholderName'
        label='carholder name'
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
      <button
        type='submit'
      >

        {!creditCardData.isSuccessSubmit && 'Confirm'}
        {isSuccessSubmit && 'Continue'}
      </button>

    </form>
  );
};
