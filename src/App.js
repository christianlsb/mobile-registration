import {
  Container,
  ImgPeoples,
  Containerinformations,
  H1,
  Label,
  Input,
  Button,
  Arrow
} from "./styles/style";

function App() {
  return (
    <>
      <Container>
        <ImgPeoples />
        <Containerinformations>
          <H1>Olá!</H1>
          <Label>Nome</Label>
          <Input/>
          <Label>Idade</Label>
          <Input/>
          <Button>Cadastrar<Arrow/></Button>
        </Containerinformations>
      </Container>
    </>
  );
}

export default App;
