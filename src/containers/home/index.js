import * as S from "./styles";
import axios from "axios";
import PepoleImg from "../../assets/images/pepole.png";
import ArrowImg from "../../assets/images/arrow.png";
import Title from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import { useState, useRef, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users");
      setUsers(allUsers);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <S.Container>
        <S.ImgPeoples src={PepoleImg} />
        <ContainerItens>
          <Title isMargin>Olá!</Title>
          <S.Label>Nome</S.Label>
          <S.Input ref={inputName} placeholder="Nome" />
          <S.Label>Idade</S.Label>
          <S.Input ref={inputAge} placeholder="Idade" />
          <Button to="/users" onClick={addNewUser}>
            Cadastrar
            <S.Arrow src={ArrowImg} />
          </Button>
        </ContainerItens>
      </S.Container>
    </>
  );
}

export default Home;
