import './DateInput.css';
import PropTypes from 'prop-types';

const errorMessages = ['This field cannot be blank', 'Wrong format', 'Not a valid expiration date'];

export const DateInput = ({ month, year, isValidDate=true, }) => {
  const {
    isValid: isValidMonth=true,
    mismatch: mismatchMonth,
    valueMissing: valueMissingMonth,
  } = month.valid;
  const {
    isValid: isValidYear=true,
    mismatch: mismatchYear,
    valueMissing: valueMissingYear,
  } = year.valid;

  const isNotValid=(!isValidMonth || !isValidYear);

  const isShowingBlankErrorMessage =
    isNotValid && (valueMissingMonth || valueMissingYear);
  const isShowingMismatchErrorMessage =
    isNotValid && (mismatchYear || mismatchMonth);
  return (
    <fieldset className={`date_input-container ${isNotValid ? 'expanded' : ''}`}>
      <label className='input__label'>exp.date(mm/yy)</label>
      <div className='date_input-inputs'>
        <input
          name='month'
          id='month'
          min='1'
          max='12'
          placeholder='MM'
          {...month}
        />
        <input
          name='year'
          id='year'
          placeholder='YY'
          {...year}
        />
      </div>
      {isShowingBlankErrorMessage && (
        <span className='error-field'>{errorMessages[0]}</span>
      )}
      {isShowingMismatchErrorMessage && (
        <span className='error-field'>
          {errorMessages[1]}
          numbers only
        </span>
      )}
      {!isValidDate && (
        <span className='error-field'>
          {errorMessages[2]}
        </span>
      )}
    </fieldset>
  );
};

DateInput.propTypes = {
  month: PropTypes.object.isRequired,
  year: PropTypes.object.isRequired,
};
