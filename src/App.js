  import {
    Container,
    ImgPeoples,
    Containerinformations,
    H1,
    Label,
    Input,
    Button,
    Arrow,
  } from "./styles/style";
  import PepoleImg from "./assets/imgs/pepole.png";
  import ArrowImg from "./assets/imgs/arrow.png";

  function App() {
    const users = [
      { id: Math.random(), name: "Christian", age: 18 },
      { id: Math.random(), name: "Marcos", age: 54 },
    ];

    return (
      <>
        <Container>
          <ImgPeoples src={PepoleImg} />
          <Containerinformations>
            <H1>Olá!</H1>
            <Label>Nome</Label>
            <Input />
            <Label>Idade</Label>
            <Input />
            <Button>
              Cadastrar
              <Arrow src={ArrowImg} />
            </Button>
            <ul align="center">
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.age}
                </li>
              ))}
            </ul>
          </Containerinformations>
        </Container>
      </>
    );
  }

  export default App;
