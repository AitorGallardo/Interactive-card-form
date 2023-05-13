import PropTypes from 'prop-types';
import './Input.css';

const errorMessages = ['This field cannot be blank', 'Wrong format', 'Card number not valid'];

export const Input = ({
  id,
  name,
  label,
  placeholder,
  isRequired,
  pattern = '^(.|\n)*$',
  type,
  valid,
  ...props
}) => {
  const { isValid = true, valueMissing, mismatch ,outOfRange} = valid;



  return (
    <fieldset className={`input__container ${!isValid ? 'expanded' : ''}`}>
      <label className='input__label' htmlFor={id}>
        {label}
      </label>
      <input
        className={isValid ? '' : 'invalid'}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        pattern={pattern}
        {...props}
      />
      {!isValid && valueMissing && (
        <span className='error-field'>{errorMessages[0]}</span>
      )}
      {!isValid && mismatch && (
        <span className='error-field'>
          {errorMessages[1]}
          {type} only
        </span>
      )}
      {!isValid && outOfRange && (
        <span className='error-field'>
          {errorMessages[2]}
        </span>
      )}
    </fieldset>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  pattern: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  valid: PropTypes.object,
};
