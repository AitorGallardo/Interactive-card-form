import './Form.css';
import { useField } from '../../hooks/useField';
import { Input } from '../input/Input';

export const Form = () => {
  const cardNumberRegex =
    '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$';
  const formatField = (value) => {
    console.log('value?', value);
    // Remove all non-numeric characters from the value
    const idk = value.replace(/\D/g, '');
    console.log('idk',idk);
    if (idk.length < 3 ) {
      console.log('VALUEVALUE',value);
      return value;
    }
    // Format the value as groups of four digits separated by spaces
    const matches = value.match(/\d{4}/g);
    console.log('matches',matches);
    const formattedValue = matches ? matches.join(' ') : '';
    console.log('formatedvalue', formattedValue);
    return formattedValue;
  };

  const carholderName = useField('text');
  const cardNumber = useField({ type: 'text', formatField });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  };

  const handleMaxNumbers = (event) => {
    const input = event.currentTarget;
    if (input.value.length > 2) input.value = input.value.slice(0, 2);

    if (input.validity.valid) {
      errorCampo.style.display = 'none';
    } else {
      errorCampo.style.display = 'block';
    }
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
        // pattern={cardNumberRegex}
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
          <label className='form__container-xp_date-label'>
            exp.date(mm/yy)
          </label>
          <div className='form__container-exp_date-inputs'>
            <input
              type='number'
              onInput={handleMaxNumbers}
              min='1'
              max='12'
              placeholder='MM'
            />
            <input
              type='number'
              onInput={handleMaxNumbers}
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
