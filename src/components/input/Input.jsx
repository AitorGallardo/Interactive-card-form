import PropTypes from 'prop-types';
import './Input.css';

const errorMessages = ['This field cannot be blank', 'Wrong format, '];

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
  const { isValid = true, valueMissing, mismatch } = valid;



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
