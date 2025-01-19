import { useState } from "react";
import { CategoriesCont, Header } from "./CategoriesStyle";
import Category from "./Category/Category";
import CategoryPagination from "./CategoryPagination/CategoryPagination";
import { useSearchParams } from "react-router";

export default ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategories, setActiveCategories] = useState([]);

  return (
    <div>
      <Header>Categories</Header>
      <CategoriesCont>
        {activeCategories.map((ct) => (
          <Category
            category={ct}
            key={ct.id}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        ))}
      </CategoriesCont>
      <CategoryPagination
        categories={categories}
        setActiveCategories={setActiveCategories}
      />
    </div>
  );
};
