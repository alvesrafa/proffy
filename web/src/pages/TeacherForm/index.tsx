import React, { useState, FormEvent } from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import warningIcon from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";
import api from "../../services/api";
import { toast } from "react-toastify";
const TeatcherList: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    avatar: "",
    whatsapp: "",
    bio: "",
    subject: "",
    cost: "",
  });
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateClass = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ ...data, schedules: scheduleItems });
    api
      .post("classes", { ...data, schedule: scheduleItems })
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        console.log(response.data);
      })
      .catch((e) => {
        toast.error("Erro ao cadastrar aula.");
        console.log("Erro ao enviar formularios", e);
      });
  };

  const [scheduleItems, setScheduleItems] = useState([
    { from: "", to: "", week_day: 0 },
  ]);
  const setScheduleItemValue = (
    position: number,
    name: string,
    value: string
  ) => {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [name]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(newArray);
  };
  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { from: "", to: "", week_day: 0 }]);
  };
  return (
    <Container>
      <Header
        title={"Que incrível que você quer dar aulas."}
        description={
          "O primeiro passo é preencher esse formulário de inscrição"
        }
      />
      <Content>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              onChange={handleInputChange}
              name={"name"}
              label={"Nome completo"}
            />
            <Input
              onChange={handleInputChange}
              name={"avatar"}
              label={"Avatar"}
            />
            <Input
              onChange={handleInputChange}
              name={"whatsapp"}
              label={"Whatsapp"}
            />
            <TextArea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              onChange={handleSelectChange}
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
            <Input
              onChange={handleInputChange}
              name={"cost"}
              label={"Custo da sua hora por aula"}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Input
              onChange={handleInputChange}
              name={"subject"}
              label={"Matéria"}
            />
            <Input
              onChange={handleInputChange}
              name={"cost"}
              label={"Custo da sua hora por aula"}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  onChange={(e) =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
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
                  onChange={(e) =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
                  name="from"
                  label="Das"
                  type="time"
                />
                <Input
                  onChange={(e) =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
                  name="to"
                  label="Até"
                  type="time"
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button className="submit">Salvar cadastro</button>
          </footer>
        </form>
      </Content>
    </Container>
  );
};

export default TeatcherList;
