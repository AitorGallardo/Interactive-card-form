import './Form.css';
import {formatMaxNumber} from '../../helpers/formatMaxNumber'
import { useField } from '../../hooks/useField';
import { Input } from '../input/Input';

export const Form = () => {


  const carholderName = useField('text');
  // const cardNumber = useField({ type: 'text', formatField });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  };


  return (
    <form className='form__container' onSubmit={() => handleSubmit()}>
      <Input
        id='carholderName'
        name='carholderName'
        label='carholder name'
        placeholder='e.g. Jane Appleseed'
        errMessage='Wrong format, characters only'
        pattern='^[A-Za-z ]+$'
        {...carholderName}
      />
      <Input
        id='number'
        name='number'
        label='card number'
        placeholder='e.g. 1234 6578 9123 0000'

      />
      {/* <Input
          id='date'
          name='date'
          label='exp.date(mm/yy)'
          placeholder=''
          type='date'
        /> */}
      <div className='form__third-row'>
        <fieldset className='form__container-exp_date'>
          <label className='form__container-exp_date-label'>
            exp.date(mm/yy)
          </label>
          <div className='form__container-exp_date-inputs'>
            <input
              type='number'
              onInput={formatMaxNumber}
              min='1'
              max='12'
              placeholder='MM'
            />
            <input
              type='number'
              onInput={formatMaxNumber}
              placeholder='YY'
              required
            />
          </div>
          <span id='error-campo'>Este campo es obligatorio.</span>
        </fieldset>
        <div className='form__third-row__second-field'>
          <Input
            id='cvc'
            name='cvc'
            label='cvc'
            placeholder='eg. 123'
            type='number'
          />
        </div>
      </div>
      <button className='form__button'>Confirm</button>
    </form>
  );
};
