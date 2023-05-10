import './Form.css';
import { Input } from '../input/Input';
import { useInitForm } from '../../hooks/useInitForm';
import { formatMaxNumber } from '../../helpers/formatMaxNumber';
import { trimCardName } from '../../helpers/trimCardName';

export const Form = () => {
  const { cardName, cardNumber, cardDate1, cardDate2, cardCvc } = useInitForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Data on Submit', data);
  };

  const handleNameInputBlur = (event)=>{
    const value = event.target.value;
    event.target.value = trimCardName(value);
  }

  return (
    <form className='form__container' onSubmit={handleSubmit}>
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
              name='date1'
              id='date1'
              type={cardDate1.type}
              onInput={formatMaxNumber}
              min='1'
              max='12'
              placeholder='MM'
              value={cardDate1.value}
              onChange={cardDate1.onChange}
            />
            <input
              name='date2'
              id='date2'
              type={cardDate2.type}
              onInput={formatMaxNumber}
              placeholder='YY'
              required
              value={cardDate2.value}
              onChange={cardDate2.onChange}
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
      <button type='submit' className='form__button'>
        Confirm
      </button>
    </form>
  );
};
