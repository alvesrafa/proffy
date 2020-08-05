import React from "react";

import { Container } from "./styles";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src={'https://avatars0.githubusercontent.com/u/32360540?s=400&u=996cf0fbc6f57670dd8d76863adced6be6ba223e&v=4'}
          alt="Rafael Alves"
        />
        <div>
          <strong>Rafael Alves</strong>
          <span>Quimíca</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$20,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
