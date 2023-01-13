import {
  Container,
  ImgPeoples,
  Containerinformations,
  H1,
  Label,
  Input,
  Button,
  Arrow,
  User
} from "./styles/style";
import PepoleImg from "./assets/imgs/pepole.png";
import ArrowImg from "./assets/imgs/arrow.png";
import Trash from "./assets/imgs/trash.png"
import { useState } from "react";

function App() {
  
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()


  function addNewUser(){
   setUsers([...users,{id: Math.random(), name, age}])
  }

  function changeName(event){
    setName(event.target.value)
  }

  function changeAge(event){
    setAge(event.target.value)
  }

  return (
    <>
      <Container>
        <ImgPeoples src={PepoleImg} />
        <Containerinformations>
          <H1>Olá!</H1>
          <Label>Nome</Label>
          <Input onChange={changeName} placeholder="Nome"/>
          <Label>Idade</Label>
          <Input onChange={changeAge} placeholder="Idade"/>
          <Button onClick={addNewUser}>
            Cadastrar
            <Arrow src={ArrowImg} />
          </Button>
          <ul align="center">
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>  <p>{user.age}</p>
                <button><img src={Trash}/></button>
              </User>
            ))}
          </ul>
        </Containerinformations>
      </Container>
    </>
  );
}

export default App;
