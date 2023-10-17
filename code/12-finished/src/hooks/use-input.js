import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};
//toto bolo ako bonus, ze ako by sa sem dal pouzit useReducer
// tu niesu useState ktore spolu uzsko suvisia, ale aj tak je tu useReducer pouzity, ako practice
// handling the action types
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched /*copying the previous state*/};
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true};
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false};
  }
  return state;
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //pouzitie fields z useReducer-a
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    //toto zavola useReducer function, cize dispatch
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
