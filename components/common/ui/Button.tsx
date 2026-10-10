import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ name, styles, action }) => {
  return (
    <button className={styles} onClick={action}>
      {name}
    </button>
  );
};

export default Button;
