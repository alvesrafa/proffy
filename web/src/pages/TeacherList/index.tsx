import React, { useState, FormEvent, useEffect } from "react";

import { Container, Content } from "./styles";

import Header from "../../components/Header";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.get("classes", {
      params: { subject, week_day: weekDay, time },
    });

    setTeachers(response.data);
  };
  return (
    <Container>
      <Header title={"Estes são os proffys disponíveis."}>
        <form id="search-teachers" onSubmit={handleSubmit}>
          <Select
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Quimica", label: "Quimica" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Portugues", label: "Portugues" },
              { value: "Matematica", label: "Artes" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Sociologia", label: "Sociologia" },
            ]}
            name={"subject"}
            label={"Matéria"}
          />

          <Select
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sábado" },
            ]}
            name={"week_day"}
            label={"Dia da semana"}
          />

          <Input
            onChange={(e) => {
              setTime(e.target.value);
            }}
            type="time"
            label="Horário"
            name="time"
          />
          <button type="submit">Buscar</button>
        </form>
      </Header>
      <Content>
        {Array.isArray(teachers) &&
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
      </Content>
    </Container>
  );
};

export default TeacherList;
