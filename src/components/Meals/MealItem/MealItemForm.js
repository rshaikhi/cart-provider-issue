import React, { useState, useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import CardContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const ctx = useContext(CardContext);

  const [userInput, setUserInput] = useState("1");

  const submitHandler = (event) => {
    event.preventDefault();
    const addedMeal = {
      qty: userInput,
      ...props,
    };
    ctx.addItem(addedMeal);
    //props.onAddMeal(addedMeal);
  };

  const amountChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange: amountChangeHandler,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
