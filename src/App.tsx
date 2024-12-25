import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import s from './styles.module.css'

function App() {
  const [count, setCount] = useState(0)

  const onButtonHandler = () => {

  }
  return (
		<div className='App'>
      <div className={s.countWrapper}>
        <h1 className={s.name}>Счетчик:</h1>
        <h2 className={s.count}>{count}</h2>
        <div className={s.buttonWrapper}>
          <button
            className={`${s.button} + ${s.buttonMinus}`}
            onClick={() => setCount((res) => res - 1)}
          >
            Минус
          </button>
          <button
            className={`${s.button} + ${s.buttonPlus}`}
            onClick={() => setCount((res) => res + 1)}
          >
            Плюс
          </button>
        </div>
      </div>
		</div>
	);
}

export default App;
