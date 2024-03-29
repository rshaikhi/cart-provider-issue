//import OrderContext from "../OrderContext";
import CartContext from "../store/cart-context";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import React, { useContext } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    qty: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    qty: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    qty: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    qty: 0,
  },
];

const AvailableMeals = (props) => {
  const addMealHandler = (value) => {
    let foundIndex = DUMMY_MEALS.findIndex((meal) => meal.name == value.name);
    DUMMY_MEALS[foundIndex].qty += parseInt(value.qty);
    console.log(DUMMY_MEALS);
  };

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
