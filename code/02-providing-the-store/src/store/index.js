import { createStore } from 'redux';

//state musi mat default value, aby to nepadlo
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//tu sa pouziva ten redux store
const store = createStore(counterReducer); //mozem ignorovat tento deprecate call, je to ok

export default store;