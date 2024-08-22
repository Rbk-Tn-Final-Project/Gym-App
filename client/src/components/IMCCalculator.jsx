import React, { useState } from 'react';
import './IMCCalculator.css'

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight > 0 && height > 0) {
   
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
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

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className='container1'>
      <div className='imcTitle'>
        <h1>La formule est :</h1>
        <h3>IMC = Poids / Taille x Taille</h3>
      </div>
      <h2 className='h22'>IMC (BMI) Calculator</h2>
      <form className='form1' onSubmit={calculateBMI}>
        <div>
          <label className='.label1'>Weight (kg): </label>
          <input className='.input1'
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='.label1'>Height (cm): </label>
          <input className='.input1'
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button className='button1' type="submit">Calculate BMI</button>
        <button className='button1' type="button" onClick={resetFields}>Reset</button>
      </form>
      {bmi && (
        <div className='divres'>
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;
