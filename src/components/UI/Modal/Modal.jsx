import React from "react";
import classes from "./Modal.module.css";
import Card from "../Card/Card";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>{props.children}</Card>
    </React.Fragment>
  );
};

export default Modal;
