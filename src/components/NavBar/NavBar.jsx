import { useState } from "react";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import Categories from "./Categories/Categories";
import { Nav } from "./NavBarStyle";
import UserProfile from "./UserProfile/UserProfile";

const categoriesArr = [
  {
    id: 1,
    name: "All",
    description: "All tasks.",
  },
  {
    id: 2,
    name: "Personal Development Purposes",
    description:
      "Activities for self-improvement, like reading or taking courses.",
  },
  {
    id: 3,
    name: "Fitness",
    description: "Workouts, yoga, and other physical activities.",
  },
  {
    id: 4,
    name: "Home",
    description: "Chores and maintenance tasks for your living space.",
  },
  {
    id: 5,
    name: "Shopping",
    description: "Lists for groceries, gifts, and other items to purchase.",
  },
  {
    id: 6,
    name: "Finance",
    description: "Budgeting, bill payments, and other money-related tasks.",
  },
  {
    id: 7,
    name: "Eating",
    description: "Budgeting, bill payments, and other money-related tasks.",
  },
  {
    id: 8,
    name: "Dancin",
    description: "Budgeting, bill payments, eat and other money-related tasks.",
  },
];

export default () => {
  const [categories, setCategories] = useState(categoriesArr);

  // function handleAddCategory(category) {}

  return (
    <Nav>
      <UserProfile />
      <Categories categories={categories} />
      <AddNewCategory />
    </Nav>
  );
};
