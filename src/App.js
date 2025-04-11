import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height === 0 || weight === 0) {
      alert("Height and Weight cannot be 0")
    } else {
      let bmi;

      bmi = weight / (height * height) * 703;

      setBmi(bmi);

      if (bmi < 25) {
        setMessage("You are under weight");
      }

      else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are over weight");
      }
    }
  }

  const reset = () => {

  }

  return (
    <div className='bmi-app'>
      <div className='container'>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter your height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reset}>Reset</button>

          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <h3>{message}</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
