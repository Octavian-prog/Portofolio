import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import '../Styles/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(evaluate(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        <button className="clear" onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;