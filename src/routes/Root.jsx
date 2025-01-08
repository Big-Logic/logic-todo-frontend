import {
  createRoutesFromChildren,
  createBrowserRouter,
  Route,
} from "react-router";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

// Pages
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Setting from "../pages/Setting/Setting";
import UserSetting from "../pages/UserSetting/UserSetting";

const routes = createRoutesFromChildren(
  <Route element={<AppLayout />}>
    <Route element={<AuthLayout />}>
      <Route index element={<Home />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/user-setting" element={<UserSetting />} />
    </Route>
    <Route path="auth" element={<Auth />} />
  </Route>
);

export default createBrowserRouter(routes);
