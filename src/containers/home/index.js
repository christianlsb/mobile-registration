import * as S from "./styles";
import axios from "axios";
import PepoleImg from "../../assets/images/pepole.png";
import ArrowImg from "../../assets/images/arrow.png";
import Trash from "../../assets/images/trash.png";
import { useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    // const {data: newUser} = await axios.post("http://localhost:3001/users", {
    //   name: inputName.current.value,
    //   age: inputAge.current.value,
    // });
    // setUsers([...users, newUser])

    const {data : allUsers} = await axios.get("http://localhost:3001/users")
      setUsers(allUsers)

  }

  async function deleteUser(userId) {
     axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers,deleteUser);

    console.log(deleteUser)
  }

  return (
    <>
      <S.Container>
        <S.ImgPeoples src={PepoleImg} />
        <S.Main>
          <S.H1>Olá!</S.H1>
          <S.Label>Nome</S.Label>
          <S.Input ref={inputName} placeholder="Nome" />
          <S.Label>Idade</S.Label>
          <S.Input ref={inputAge} placeholder="Idade" />
          <S.Button onClick={addNewUser}>
            Cadastrar
            <S.Arrow src={ArrowImg} />
          </S.Button>
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
        </S.Main>
      </S.Container>
    </>
  );
}

export default Home;
