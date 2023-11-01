import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //useSelector vyberie "cast" zo store, cize iba counter co nas zaujima
  //redux automaticky urobi subscribe na tento selector, a zmena sa prejavi a rerenderuje sa teto component
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
