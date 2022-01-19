import React, { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{props.cartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
