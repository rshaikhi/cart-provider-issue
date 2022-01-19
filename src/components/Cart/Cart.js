import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let content;
  let totalAmount = 0;
  if (!props.meals) {
    content = "you got no orders dude";
  } else {
    console.log(props.meals);
    content = props.meals.map((meal) => {
      totalAmount += meal.price;
      return <CartItem {...meal} />;
    });
  }

  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>{content}</ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
