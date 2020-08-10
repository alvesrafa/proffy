import React from "react";
import {
  Container,
  Title,
  Background,
  Description,
  Button,
  ButtonText,
} from "./styles";
import giveClassesBackgroundImage from "../../assets/images/give-classes-background.png";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();
  const navigateBack = () => {
    goBack();
  };
  return (
    <Container>
      <Background resizeMode="contain" source={giveClassesBackgroundImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>
      <Button onPress={navigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
