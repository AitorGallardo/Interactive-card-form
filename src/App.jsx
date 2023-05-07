import './App.css';
import { Form } from './components/form/Form';

function App() {
  return (
    <>
      <div className='app__container'>
        <div className='app__container-background_left'></div>
        <div className='app__container-background_right'>
          <Form/>
        </div>
      </div>
    </>
  );
}

export default App;
