import * as S from "./styles/styles";
import PepoleImg from "./assets/images/pepole.png";
import ArrowImg from "./assets/images/arrow.png";
import Trash from "./assets/images/trash.png";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name, age }]);
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changeAge(event) {
    setAge(event.target.value);
  }

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  return (
    <>
      <S.Container>
        <S.ImgPeoples src={PepoleImg} />
        <S.Main>
          <S.H1>Olá!</S.H1>
          <S.Label>Nome</S.Label>
          <S.Input onChange={changeName} placeholder="Nome" />
          <S.Label>Idade</S.Label>
          <S.Input onChange={changeAge} placeholder="Idade" />
          <S.Button onClick={addNewUser}>
            Cadastrar
            <S.Arrow src={ArrowImg} />
          </S.Button>
          <ul align="center">
            {users.map((user) => (
              <S.User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} />
                </button>
              </S.User>
            ))}
          </ul>
        </S.Main>
      </S.Container>
    </>
  );
}

export default App;
