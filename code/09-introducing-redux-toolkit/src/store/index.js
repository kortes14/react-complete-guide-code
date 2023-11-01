import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

//preparing a slice of a global state, for the counter
const counterSlice = createSlice({
  name: 'counter', //nazov slice-u
  initialState,
  reducers: { //map of methods for this reducer
    //
    increment(state) {
      //tu uz MOZME mutate the object
      // preto. lebo toolkit internally manages the state and do the cloning
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //data su k dispozicii, ktore vytiahneme z action
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload : hocico co tam dam ako parameter
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

//configureStore - metodka na merging viacerych reducers
const store =
  configureStore({
  reducer: counterSlice.reducer //tu viem pridat aj object, kde budu properties, ktorych values su rozne reducers
});

//object full of keys, kde su nazby metod ktore mozme volat ked ich chceme dispatchnut
//  unique identifier per action
export const counterActions = counterSlice.actions;

export default store;
