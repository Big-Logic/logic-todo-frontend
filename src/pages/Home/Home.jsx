import { useSearchParams } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
};
