import React from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface Props {
  title: String;
}

const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Botão de votlar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>

      
    </Container>
  );
};

export default Header;
