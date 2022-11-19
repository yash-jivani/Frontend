const redux = require("redux");

// creating reducer
const funcReducer = (state = { counter: 1 }, action) => {
  console.log("Reducer function called!");
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

// creating store
const store = redux.createStore(funcReducer);

// attach subscriber to store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("Subscriber called !");
  console.log(latestState);
};

// knowing store who is subscribers
store.subscribe(counterSubscriber);

// action dispatcher
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
