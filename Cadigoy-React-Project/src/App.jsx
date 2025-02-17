/*
import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  function countIncrement(){
    setCount(count + 1);
  }
  function countDecrement(){
    if (count !== 0){
       setCount(count - 1);
    }
  }
  function countReset(){
    setCount(0);
  }
  return (
      
      <div>
        <h1>Number of clicks: {count}</h1>
        <button onClick={(countIncrement)}>
          Increment
        </button>
      <button onClick={(countReset)}>
        Reset
      </button>
      <button onClick={(countDecrement)}>
        Decrement
      </button>
      
    </div>
  )
}

export default App
*/

import React, { useState } from 'react';
import './index.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  function handleCalculate() {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setResult('Undefined');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult('Invalid operator');
    }
  }

  return (
    <div className="App">
      <h1>Basic Calculator</h1>
      <div className="input-container">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number"/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number"/>
      </div>
      <div className="button-container">
        <button onClick={() => setOperator('+')}>+</button>
        <button onClick={() => setOperator('-')}>-</button>
        <button onClick={() => setOperator('*')}>*</button>
        <button onClick={() => setOperator('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <h2>Answer: {result}</h2>
    </div>
  );
}

export default App;
