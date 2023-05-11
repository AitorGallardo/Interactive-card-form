import './DateInput.css';
import PropTypes from 'prop-types';
import { formatMaxNumber } from '../../helpers/formatMaxNumber';

const errorMessages = ['This field cannot be blank', 'Wrong format', 'Not a valid expiration date'];

export const DateInput = ({ month, year, isValidDate }) => {
  const {
    isValid: isValidMonth,
    mismatch: mismatchMonth,
    valueMissing: valueMissingMonth,
  } = month.valid;
  const {
    isValid: isValidYear,
    mismatch: mismatchYear,
    valueMissing: valueMissingYear,
  } = year.valid;

  const isShowingBlankErrorMessage =
    (!isValidMonth || !isValidYear) && (valueMissingMonth || valueMissingYear);
  const isShowingMismatchErrorMessage =
    (!isValidMonth || !isValidYear) && (mismatchYear || mismatchMonth);
  return (
    <fieldset className='date_input-container'>
      <label className='input__label'>exp.date(mm/yy)</label>
      <div className='date_input-inputs'>
        <input
          name='month'
          id='month'
          onInput={formatMaxNumber}
          min='1'
          max='12'
          placeholder='MM'
          required
          {...month}
        />
        <input
          name='year'
          id='year'
          onInput={formatMaxNumber}
          placeholder='YY'
          required
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
