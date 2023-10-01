import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

//vascinou staci akceptovat props
// ALE mozme tu aj pouzit napriklad ref, a tym padom by sa to previazalo
// na wrapping tohto celeho pouzijeme react.forwardRef
// tym padom je to pouzitelne v inpute v Login.js
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  //napr cez useEffect by sa dal useRef pouzit
  //klasicke pouzite useRef
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  //ALE nechcem to pozuti ked sa prerenduje component
  // chcem to ja zavolat cez funkciu, preto tu je activate metodka
  // je to rare case
  //
  const activate = () => {
    inputRef.current.focus();
  };
  //imperativeHandle hook
  // obsahuje data, ktore viem zavolat from the outside, a tym tak manupulovat s tymto componentom
  useImperativeHandle(ref, () => {
    return {
      //tu zavolame activate() metodku, cize toto je imperative handling
      focus: activate,
    };
  });

  //cez props tu nastavime veci from outside
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
