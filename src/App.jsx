import './App.css';
import { Form } from './components/form/Form';

function App() {
  return (
    <>
      <div className='app__container'>
        <div className='app__frontface_card-container'>
          <div className='app__frontface_card-content'>
            <span className='app__frontface_card-numbers'>
              0000 0000 0000 0000
            </span>
            <div>
              <span className='app__frontface_card-name'>JANE APPLESEED</span>
              <span className='app__frontface_card-date'>00/00</span>
            </div>
          </div>
        </div>
        <div className='app__backface_card-container'>
          <span className='app__backface_card-cvc'>000</span>
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
