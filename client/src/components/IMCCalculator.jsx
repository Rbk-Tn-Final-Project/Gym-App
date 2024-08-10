import React, { useState } from 'react';

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
      determineBMIMessage(bmiValue);
    } else {
      setMessage('Please enter valid height and weight');
    }
  };

  const determineBMIMessage = (bmiValue) => {
    if (bmiValue < 18.5) {
      setMessage('You are underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You have a normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
  };

  return (
    <div>
        <div className='imcTitle'><h1>La formule est :</h1>
        <h3>IMC = Poids / Taille x Taille</h3>
        </div>
      <h2>IMC (BMI) Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;
