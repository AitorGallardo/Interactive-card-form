import './Form.css';
import { Input } from '../input/Input';
import { useInitForm } from '../../hooks/useInitForm';
import { trimCardName } from '../../helpers/trimCardName';
import { isValidExpirationDate } from '../../helpers/isValidExpirationDate';
import { DateInput } from '../dateInput/DateInput';
import { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';

export const Form = () => {
  const { cardName, cardNumber, cardMonth, cardYear, cardCvc } = useInitForm();
  const [isValidDate, setValidDate] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.log('este forrrrm',form.elements)
    Array.from(form.elements).map((el) => {
      el.required = true;
      Simulate.change(el);
    });

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Data on Submit', data);
    if (data.month && data.year) {
      const isValidDate = isValidExpirationDate(data.month, data.year);
      setValidDate(isValidDate);
    }
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
      <button type='submit' className='form__button'>
        Confirm
      </button>
    </form>
  );
};
