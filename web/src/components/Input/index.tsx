import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type ? type : "text"} id={name} name={name} {...rest} />
    </Container>
  );
};

export default Input;
