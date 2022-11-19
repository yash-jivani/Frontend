import { createStore } from "redux";

// create reducers
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type == "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  return state;
};

// creating store
const store = createStore(counterReducer);

export default store;
