import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  console.log("button");
  return <button>{props.label} Blah</button>;
};

export default Button;
