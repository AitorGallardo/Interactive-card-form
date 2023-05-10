import PropTypes from 'prop-types';
import './Input.css';

const errorMessages = ['This field cannot be blank', 'Wrong format, '];

export const Input = ({
  id,
  name,
  label,
  placeholder,
  isRequired = true,
  pattern = '^(.|\n)*$',
  type,
  valid,
  ...props
}) => {
  return (
    <fieldset className='input__container'>
      <label className='input__label' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        pattern={pattern}
        {...props}
      />
      {!valid.isValid && valid.valueMissing && (
        <span className='error-campo'>{errorMessages[0]}</span>
      )}
      {!valid.isValid && valid.mismatch && (
        <span className='error-campo'>
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
