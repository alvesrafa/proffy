import React, { useState } from "react";
import {
  Container,
  Profile,
  ProfileInfo,
  Nome,
  Materia,
  ImageProfile,
  Bio,
  Footer,
  Price,
  PriceValue,
  Buttons,
  Button,
  FavoriteButton,
  ButtonText,
} from "./styles";
import { Image, Linking } from "react-native";
import heartOuline from "../../assets/images/icons/heart-outline.png";
import unFavorite from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItem {
  teacher: Teacher;
  favorited: boolean;
}
const TeacherItem: React.FC<TeacherItem> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const createNewConnection = async () => {
    await api.post("connections", { user_id: teacher.id });
  };
  const handleLinkToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };
  const handleConnection = async () => {
    createNewConnection();
    handleLinkToWhatsApp();
  };

  const toggleFavoriteTeacher = async () => {
    const favorites = await AsyncStorage.getItem("@FAVORITES");
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem("@FAVORITES", JSON.stringify(favoritesArray));
  };

  return (
    <Container>
      <Profile>
        <ImageProfile
          source={{
            uri: teacher.avatar,
          }}
        />
        <ProfileInfo>
          <Nome>{teacher.name}</Nome>
          <Materia>{teacher.subject}</Materia>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {"   "}
          <PriceValue>R$ {teacher.cost}</PriceValue>{" "}
        </Price>
        <Buttons>
          <FavoriteButton
            onPress={toggleFavoriteTeacher}
            favorited={isFavorited}
          >
            {isFavorited ? (
              <Image source={unFavorite} />
            ) : (
              <Image source={heartOuline} />
            )}
          </FavoriteButton>
          <Button onPress={handleConnection}>
            <Image source={whatsappIcon} />
            <ButtonText>Entrar em contato</ButtonText>
          </Button>
        </Buttons>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
