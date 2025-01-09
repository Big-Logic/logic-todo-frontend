import { useSearchParams } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import { Container } from "./HomeStyles";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};
