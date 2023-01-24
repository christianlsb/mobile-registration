import * as S from "./styles";
import axios from "axios";
import PepoleImg from "../../assets/images/UserProfile.png";
import ArrowImg from "../../assets/images/arrow.png";
import Trash from "../../assets/images/trash.png";
import Title from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users");
      setUsers(allUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers, deleteUser);
  }

  return (
    <>
      <S.Container>
        <S.ImgPeoples src={PepoleImg} />
        <ContainerItens isBlur>
          <Title>Usuários</Title>

          <ul align="center">
            {users.map((user) => (
              <S.User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="img-trash" />
                </button>
              </S.User>
            ))}
          </ul>
          <Button to="/">
            <S.Arrow src={ArrowImg} />
            Voltar
          </Button>
        </ContainerItens>
      </S.Container>
    </>
  );
}

export default Home;
