import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container } from "./styles";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api
      .get("connections")
      .then((response) => {
        setTotalConnections(response.data.total);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          className="hero-image"
          src={landingImg}
          alt="Plataformas de estudos"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          {` Total de ${totalConnections} conexões já realizadas`}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </Container>
  );
};

export default Landing;
