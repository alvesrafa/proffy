import React from "react";

import { Container, Content } from "./styles";

import Header from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";


const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title={"Estes são os proffys disponíveis."}>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" name="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" name="time" />
          </div>
        </form>
      </Header>
      <Content>
        <TeacherItem />
      </Content>
    </Container>
  );
};

export default TeacherList;
