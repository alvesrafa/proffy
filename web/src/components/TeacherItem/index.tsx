import React from "react";

import { Container } from "./styles";
import wppIcon from "../../assets/images/icons/whatsapp.svg";
import { Interface } from "readline";
import api from "../../services/api";
export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherProps {
  teacher: Teacher;
}
const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  const createNewConnection = async () => {
    await api.post("connections", { user_id: teacher.id });
  };
  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora <strong>R${teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={wppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherItem;
