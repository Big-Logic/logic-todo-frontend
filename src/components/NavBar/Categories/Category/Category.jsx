import { Button, Container } from "./CategoryStyle";

const nameLength = 12;

export default ({ category, searchParams, setSearchParams }) => {
  function handleClick(e) {
    setSearchParams((prev) => {
      return { ...prev, category: category.name.toLowerCase() };
    });
  }

  return (
    <Container>
      <Button
        onClick={handleClick}
        $categoryName={category.name.toLowerCase()}
        $searchParamCategory={searchParams.get("category")}
      >
        {category.name.length > nameLength
          ? category.name.slice(0, 12).padEnd(nameLength + 3, ".")
          : category.name}
      </Button>
    </Container>
  );
};
