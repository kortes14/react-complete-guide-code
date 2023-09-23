import React from 'react';

//.module.css je povinny pre CSS moduling, inac to neimportne
import classes from './Card.module.css';

const Card = (props) => {
  //ak pridam class na Card component (v AddUser.js) tak treba sem pridat  ${props.className}, aby sa to aj aplikovalo
  // kedze Card je custom component
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
