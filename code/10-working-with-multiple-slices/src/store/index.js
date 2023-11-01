import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

//dalsi slice ktory sa stara cisto iba o auth
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true; //na pozadi sa to transformuje na unmutable code
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//mame viac slices, ale volame iba jeden store
// a reducery na mergnut dokopy
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //counter a auth su nami vymyslene keys, moze to byt hocico
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
