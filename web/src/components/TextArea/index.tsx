import React, { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} {...rest} />
    </Container>
  );
};

export default TextArea;
