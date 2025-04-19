import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    e.preventDefault();
    if (numericHeight === 0 || numericWeight === 0 || isNaN(numericHeight) || isNaN(numericWeight)) {
      alert("Height and Weight cannot be 0 or empty");
    } else {
      let bmi;

      bmi = numericWeight / (numericHeight * numericHeight) * 703;

      setBmi(bmi);

      if (bmi < 25) {
        setMessage(formMessageWithTailwindCss({ tag: 'h3', message: 'You are under weight', css: 'text-lg text-yellow-600' }));
      }
      else if (bmi >= 25 && bmi <= 30) {
        setMessage(formMessageWithTailwindCss({ tag: 'h3', message: 'You are healthy', css: 'text-lg text-green-600' }));
      } else {
        setMessage(formMessageWithTailwindCss({ tag: 'h3', message: 'You are over weight', css: 'text-lg text-red-600' }))
      }
    }
  }

  const formMessageWithTailwindCss = ({ tag, message, css }) => {
    const TagName = tag;
    return <TagName className={css}>{message}</TagName>;
  }

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(0);
    setMessage("");
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className="bg-white rounded-2xl p-8 w-96 shadow-lg">
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Weight (lbs)</label>
            <input
              type='number'
              placeholder='Enter your weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Height (in)</label>
            <input
              type='number'
              placeholder='Enter your height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between mb-4">
            <button
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg transition"
              onClick={reset}
              type="button"
            >
              Reset
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
              type='submit'
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your BMI is: {bmi.toFixed(2)}</h3>
            {message}
          </div>
        </form>
      </div>
    </div>
  );

}

export default App;
