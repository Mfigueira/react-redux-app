import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.show);

  const hanldeIncrement = () => {
    dispatch(counterActions.increment());
  };

  const hanldeIncrementByFive = () => {
    dispatch(counterActions.increase(5));
  };

  const hanldeDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={hanldeIncrement}>Increment</button>
        <button onClick={hanldeIncrementByFive}>Increase by 5</button>
        <button onClick={hanldeDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
