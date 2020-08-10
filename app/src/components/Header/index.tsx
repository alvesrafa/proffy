import React, { ReactNode } from "react";
import { Image } from "react-native";
import { Container, Button, TopBar, Title, BottomBar } from "./styles";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";

interface Props {
  title: string;
  headerRight?: ReactNode;
}
const Header: React.FC<Props> = ({ title, children, headerRight }) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.navigate("Landing");
  };
  return (
    <Container>
      <TopBar>
        <Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </Button>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <BottomBar>
        <Title>{title}</Title>
        {headerRight}
      </BottomBar>

      {children}
    </Container>
  );
};

export default Header;
