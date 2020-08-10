import React, { useState, useEffect } from "react";

import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from "./styles";
import Header from "../../components/Header";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import api from "../../services/api";

import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const toggleFiltersVisible = () => {
    setFiltersVisible(!filtersVisible);
  };

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const handleFilters = async () => {
    loadFavorites()
    const response = await api.get("classes", {
      params: { subject, week_day, time },
    });

    setTeachers(response.data);
  };

  const [favorites, setFavorites] = useState<Number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem("@FAVORITES").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );
        setFavorites(favoritedIds);
      }
    });
  }
  useFocusEffect(() => {
    loadFavorites()
  })
  

  return (
    <Container>
      <Header
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton>
            <Feather
              name="filter"
              size={20}
              color="#FFF"
              onPress={toggleFiltersVisible}
            />
          </BorderlessButton>
        }
      >
        {filtersVisible && (
          <SearchForm>
            <Label>Materia</Label>
            <Input
              placeholderTextColor="#C1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria"
            />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholderTextColor="#C1bccc"
                  placeholder="Qual o dia?"
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholderTextColor="#C1bccc"
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={handleFilters}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </Header>

      <Scroll
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {Array.isArray(teachers) &&
          teachers.length > 0 &&
          teachers.map((teacher: Teacher) => (
            <TeacherItem
              favorited={favorites.includes(teacher.id)}
              teacher={teacher}
              key={String(teacher.id)}
            />
          ))}
      </Scroll>
    </Container>
  );
};

export default TeacherList;
