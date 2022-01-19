import React from "react";
import Card from "../UI/Card/Card";
import AvailableMeals from "./AvailableMeals";
import MealItem from "./MealItem/MealItem";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
