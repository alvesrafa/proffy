import React, { SelectHTMLAttributes } from "react";

import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
  label: string;
  name: string;
}
const Select: React.FC<SelectProps> = ({ options, label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select  name={name} id={name} {...rest} defaultValue="">
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
