import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //takto to bolo predtym, teraz ale reducer exportujeme priamo
});

export default store;
