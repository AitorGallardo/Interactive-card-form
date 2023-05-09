import { useContext } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { CreditCardContext } from './context/CreditCardContext';

function App() {
  const { creditCardData } = useContext(CreditCardContext);

  return (
    <>
      <div className='app__container'>
        <div className='app__frontface_card-container'>
          <div className='app__frontface_card-content'>
            <span className='app__frontface_card-numbers'>
            {creditCardData.number}
            </span>
            <div>
              <span className='app__frontface_card-name'>{creditCardData.name}</span>
              <span className='app__frontface_card-date'>{creditCardData.date1}/{creditCardData.date2}</span>
            </div>
          </div>
        </div>
        <div className='app__backface_card-container'>
          <span className='app__backface_card-cvc'>{creditCardData.cvc}</span>
        </div>
        <div className='app__container-background_left'></div>
        <div className='app__container-background_right'>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
