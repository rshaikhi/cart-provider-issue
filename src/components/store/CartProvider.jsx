import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [selectedMeals, setSelectedMeals] = useState([]);
  console.log(selectedMeals);
  const addItemToCartHandler = (item) => {
    console.log(item);
    console.log(selectedMeals);
    setSelectedMeals((prevState) => {
      console.log(prevState);
      let foundIndex = prevState.findIndex((meal) => meal.name == item.name);
      if (foundIndex == -1) {
        prevState.push(item);
      } else {
        prevState[foundIndex] += parseInt(item.value);
      }
    });
    console.log(selectedMeals);
  };
  const removeItemFromCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: selectedMeals,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
