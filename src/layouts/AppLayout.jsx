import { Outlet } from "react-router";
import GlobalStyle from "../config/GlobalStyle/GlobalStyle";

export default () => {
  return (
    <main>
      <GlobalStyle />
      <Outlet />
    </main>
  );
};
