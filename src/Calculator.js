import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const validateInputs = () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (num1 === '' && num2 === '') {
      setErrorMessage('Please enter both numbers.');
      return false;
    }
    if (num1 === '') {
      setErrorMessage('Num1 cannot be empty.');
      return false;
    }
    if (num2 === '') {
      setErrorMessage('Num2 cannot be empty.');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }
    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum.toFixed(2));
      setSuccessMessage('Success: Your result is shown above.');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(difference.toFixed(2));
      setSuccessMessage('Success: Your result is shown above.');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(product.toFixed(2));
      setSuccessMessage('Success: Your result is shown above.');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Cannot divide by zero.');
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(quotient.toFixed(2));
        setSuccessMessage('Success: Your result is shown above.');
      }
    }
  };

  return (
    <div className='cal'>
      <h2>React Calculator</h2>
      <div className='num'>
        <input type="text" placeholder="Num1" value={num1} onChange={handleNum1Change} style={{ color: 'white',backgroundColor:'black' }}></input>
      </div>
      <div className='num'>
        <input type="text" placeholder="Num2" value={num2} onChange={handleNum2Change} style={{ color: 'white',backgroundColor:'black' }}></input>
      </div>
      <div className='btn'>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {errorMessage && !successMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && result && <p>Result=node -v{result}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default Calculator;
