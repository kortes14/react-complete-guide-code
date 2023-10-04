import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*spread operator - all the key value pairs are added to the input prop*/}
      {  /*for example {type:"text"}*/}
      <input {...props.input} />
    </div>
  );
};

export default Input;
