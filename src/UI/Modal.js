import React from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

function Backdrop(props) {
  return <div className={styles["backdrop"]}>{props.children}</div>;
}

function Modal(props) {
  /* props must contain
       [ modal content in props.children ]
        closing button text
        hide/show state must trigger in parent 
    */
  const { closingButtonText, hideModal } = props;

  return (
    <Backdrop>
      <Card className={styles["modal-card"]}>
        <div className={styles["modal-content"]}>{props.children}</div>
        <Button className={styles["closeBtn"]} onClick={() => hideModal()}>
          {closingButtonText}
        </Button>
      </Card>
    </Backdrop>
  );
}

export default Modal;
