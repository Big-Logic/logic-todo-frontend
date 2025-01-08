import { useSearchParams } from "react-router";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <h1>Auth</h1>;
};
