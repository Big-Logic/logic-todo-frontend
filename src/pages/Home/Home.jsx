import { useSearchParams } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import { Container } from "./HomeStyles";
import { useEffect } from "react";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function () {
    if (searchParams.size === 0) {
      setSearchParams({ category: "all" });
    }
  });

  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};
