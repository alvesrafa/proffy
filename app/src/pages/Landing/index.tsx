import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  TitleBold,
  Buttons,
  Button,
  TextButton,
  Connections,
} from "./styles";
import { Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";

import heartIcons from "../../assets/images/icons/heart.png";
import api from "../../services/api";

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const goToGiveClasses = () => {
    navigation.navigate("GiveClasses");
  };
  const goToStudyPages = () => {
    navigation.navigate("Study");
  };
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
      <Image
        style={{
          width: "100%",
          resizeMode: "contain",
        }}
        source={landingImg}
      />
      <Title>
        Seja bem-vindo,{"\n"}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <Buttons>
        <Button onPress={goToStudyPages} background="#9871f5">
          <Image source={studyIcon} />
          <TextButton>Estudar</TextButton>
        </Button>
        <Button onPress={goToGiveClasses} background="#04d361">
          <Image source={giveClassesIcon} />
          <TextButton>Dar aulas</TextButton>
        </Button>
      </Buttons>
      <Connections>
        Total de {totalConnections} conexões já realizadas.{" "}
        <Image source={heartIcons} />
      </Connections>
    </Container>
  );
};
export default Landing;
