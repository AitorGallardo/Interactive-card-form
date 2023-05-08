import PropTypes from 'prop-types';
import './Input.css';
export const Input = ({
  id,
  name,
  label,
  placeholder,
  errMessage,
  isRequired = false,
  pattern='^(.|\n)*$',
  type,
  isValid = true,
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
      {!isValid && <span className='error-campo'>{errMessage}</span>}
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
  type: PropTypes.oneOf(['text', 'password', 'email','number']),
  isValid: PropTypes.bool,
};
