import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  {/*pridane mnou na vyskusanie si*/}
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //pridanie classy a odnatie classy aby sa to vedelo zopakovat - cez timer
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  //useEffect a takisto useState je tu pouzity iba na to, aby sa prehrala animacia bump hocikedy ked pridam item to cart
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); //tolko ms trva animation

    return () => {
      clearTimeout(timer); //clenaup func called automatically
    };
  }, [items]); //run only it items are changed

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      {/*pridane mnou na vyskusanie si*/}
      <span style={{marginLeft: '20px'}}>Total amount: </span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
