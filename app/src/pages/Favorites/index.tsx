import React, { useState, useEffect } from "react";

import { Container, Scroll } from "./styles";
import Header from "../../components/Header";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";

import { useFocusEffect } from "@react-navigation/native";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem("@FAVORITES").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }
  useFocusEffect(() => {
    loadFavorites();
  });
  return (
    <Container>
      <Header title="Meus Proffys favoritos" />

      <Scroll
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {Array.isArray(favorites) &&
          favorites.length > 0 &&
          favorites.map((teacher: Teacher) => (
            <TeacherItem favorited teacher={teacher} key={String(teacher.id)} />
          ))}
      </Scroll>
    </Container>
  );
};

export default Favorites;
