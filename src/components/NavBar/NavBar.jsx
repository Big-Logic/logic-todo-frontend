import { useState } from "react";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import Categories from "./Categories/Categories";
import { Nav } from "./NavBarStyle";
import Setting from "./Setting/Setting";
import UserProfile from "./UserProfile/UserProfile";

export default () => {
  return (
    <Nav>
      <UserProfile />
      <Categories />
      <AddNewCategory />
    </Nav>
  );
};
