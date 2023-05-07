import './Form.css'
import { useField } from '../../hooks/useField';
import { Input } from '../input/Input';

export const Form = () => {
  const carholderName = useField('text');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  };
  return (
    <div className='form__container'>
      <form onSubmit={() => handleSubmit()}>
        <Input
          id='carholderName'
          name='carholderName'
          label='carholder name'
          placeholder='e.g. Jane Appleseed'
          {...carholderName}
        />
        <Input
          id='number'
          name='number'
          label='card number'
          placeholder='e.g. 1234 6578 9123 0000'
          type='text'
        />
        <Input
          id='date'
          name='date'
          label='exp.date(mm/yy)'
          placeholder=''
          type='date'
        />
        <Input
          id='cvc'
          name='cvc'
          label='cvc'
          placeholder='eg. 123'
          type='text'
        />
        <button>Confirm</button>
      </form>
    </div>
  );
};
