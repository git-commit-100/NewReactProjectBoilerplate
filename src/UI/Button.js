import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { className, onClick, disabled } = props;
  return (
    <button
      className={className ? `${className} ${styles["btn"]}` : styles["btn"]}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
