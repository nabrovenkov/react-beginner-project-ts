import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import s from './styles.module.css'
import { Count, increaseCountAC, reducingCountAC } from './model/сount-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  // const [count, dispatchCount] = useReducer(CountReducer, 0)
  const count = useSelector<RootState, Count>(state => state.count)
  const dispatch = useDispatch()

  
  return (
		<div className='App'>
			<div className={s.countWrapper}>
				<h1 className={s.name}>Счетчик:</h1>
				<h2 className={s.count}>{count}</h2>
				<div className={s.buttonWrapper}>
					<button
						className={`${s.button} + ${s.buttonMinus}`}
						onClick={() => dispatch(reducingCountAC())}
					>
						Минус
					</button>
					<button
						className={`${s.button} + ${s.buttonPlus}`}
						onClick={() => dispatch(increaseCountAC())}
					>
						Плюс
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
