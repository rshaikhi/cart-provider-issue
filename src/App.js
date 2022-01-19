import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal/Modal";
import Cart from "./components/Cart/Cart";
import OrderContext from "./components/OrderContext";
import CartProvider from "./components/store/CartProvider";

var meals;
const App = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartClicked, setCartClicked] = useState(false);
  const [mealsSelected, setMealsSelected] = useState("");
  const openCartHandler = () => {
    setCartClicked(true);
  };
  const closeCartHandler = () => {
    setCartClicked(false);
  };

  const mealUpdateHandler = (DUMMY_MEALS) => {
    let count = 0;
    meals = [];
    //setMealsSelected(DUMMY_MEALS);
    //meals = DUMMY_MEALS;
    DUMMY_MEALS.forEach((meal) => {
      count += meal.qty;
      if (meal.qty !== 0) {
        meals.push(meal);
      }
    });
    setCartTotal(count);
  };

  return (
    <CartProvider>
      <Header cartItems={cartTotal} onCartClick={openCartHandler} />
      <main>
        <Meals />
      </main>
      {cartClicked && <Cart meals={meals} onClose={closeCartHandler} />}
    </CartProvider>
  );
};

export default App;
