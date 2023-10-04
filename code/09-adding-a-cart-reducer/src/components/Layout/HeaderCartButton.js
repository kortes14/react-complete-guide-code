import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
//ALE importuje sa samotny context a nie cartProvider
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

//will be reevaluated by react whenever context changes
const HeaderCartButton = (props) => {
  //pouzite contextu na zobrazenie poctu itemov
  const cartCtx = useContext(CartContext);

  //reduce - transform an array of data into a single element
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    //chceme spocitat amount a nie kolko itemov mame
    //cize pocitadlo  + amount
    return curNumber + item.amount;
  }, 0); //starting value

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
