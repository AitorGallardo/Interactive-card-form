import { useContext } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { CreditCardContext } from './context/CreditCardContext';

function App() {
  const { creditCardData } = useContext(CreditCardContext);
  const { isSuccessSubmit, isFirstRender } = creditCardData;

  return (
    <>
      <div className='app__container'>
        <div className='app__container-background_left'>
          <div className='app__cards-container'>
            <div className='app__frontface_card-container'>
              <div className='app__frontface_card-content'>
                <span className='app__frontface_card-numbers'>
                  {creditCardData.number || '0000 0000 0000 0000'}
                </span>
                <div>
                  <span className='app__frontface_card-name'>
                    {creditCardData.name || 'JANE APPLESEED'}
                  </span>
                  <span className='app__frontface_card-date'>
                    {creditCardData.month || creditCardData.year
                      ? `${creditCardData.month}/${creditCardData.year}`
                      : '00/00'}
                  </span>
                </div>
              </div>
            </div>
            <div className='app__backface_card-container'>
              <span className='app__backface_card-cvc'>
                {creditCardData.cvc || '000'}
              </span>
            </div>
          </div>
        </div>
        <div className='app__container-background_right'>
          <div className='empty'></div>
          <Form />
          <div
            className={`app__container-background_right-success_message ${
              isFirstRender ? 'hidden' : ''
            } ${isSuccessSubmit ? 'slide-top' : 'slide-reverse'}`}
          >
            <svg className='tick-icon' viewBox='0 0 24 24'>
              <path d='M9 16.2l-4.8-4.7c-.4-.4-.4-1 0-1.4l.8-.8c.4-.4 1-.4 1.4 0l3.5 3.5 7.1-7.1c.4-.4 1-.4 1.4 0l.8.8c.4.4.4 1 0 1.4l-8.5 8.4c-.4.3-.9.3-1.3-.1z' />
            </svg>
            <p>Credit card saved succesfully. Thank you!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
