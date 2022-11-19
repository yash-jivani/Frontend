import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state)=> state.showCounter);
  const dispatchFunc = useDispatch();

  const toggleCounterHandler = () => {
    dispatchFunc({type: 'toggle'});
  };

  const incrementHandler = () => {
    dispatchFunc({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatchFunc({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
