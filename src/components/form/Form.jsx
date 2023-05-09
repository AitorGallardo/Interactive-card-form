import './Form.css';
import { formatMaxNumber } from '../../helpers/formatMaxNumber';
import { Input } from '../input/Input';
import { useInitForm } from '../../hooks/useInitForm';

export const Form = () => {
  const { cardName, cardNumber, cardDate1,cardDate2, cardCvc } = useInitForm();

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
        {...cardName}
      />
      <Input
        id='number'
        name='number'
        label='card number'
        placeholder='e.g. 1234 6578 9123 0000'
        {...cardNumber}
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
              {...cardDate1}
            />
            <input
              type='number'
              onInput={formatMaxNumber}
              placeholder='YY'
              required
              {...cardDate2}
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
            {...cardCvc}
          />
        </div>
      </div>
      <button className='form__button'>Confirm</button>
    </form>
  );
};
