import React from 'react';

import classes from './Input.module.css';

// na to aby fungovalo refs v custom componente, tak to treba obalit do React.forwardRef}
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*tu je ten forwarded ref z riadku 6*/}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
