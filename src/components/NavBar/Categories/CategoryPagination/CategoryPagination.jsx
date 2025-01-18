import { useEffect, useState } from "react";
import {
  Container,
  PaginationBtn,
  PaginationBtnContainer2,
} from "./CategoryPaginationStyle";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

function PreviousButton({
  currentPage,
  setCurrentPage,
  sliceIndex,
  categories,
  setActiveCategories,
}) {
  function handlePrevClick() {
    setActiveCategories(
      categories.slice(
        (currentPage - 1) * sliceIndex - sliceIndex,
        (currentPage - 1) * sliceIndex
      )
    );
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <PaginationBtn onClick={handlePrevClick}>
      <HiArrowSmLeft />
    </PaginationBtn>
  );
}

function NextButton({
  currentPage,
  setCurrentPage,
  sliceIndex,
  categories,
  setActiveCategories,
}) {
  function handleNextClick() {
    setActiveCategories(
      categories.slice(sliceIndex * currentPage, (currentPage + 1) * sliceIndex)
    );
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <PaginationBtn onClick={handleNextClick}>
      <HiArrowSmRight />
    </PaginationBtn>
  );
}

export default ({ categories, setActiveCategories }) => {
  const sliceIndex = 10;

  const numberOfPages =
    categories.length < sliceIndex
      ? 1
      : categories.length % sliceIndex === 0
      ? Math.trunc(categories.length / sliceIndex)
      : Math.trunc(categories.length / sliceIndex + 1);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(function () {
    setActiveCategories((prev) => [
      ...categories.slice(currentPage, sliceIndex),
    ]);
    setCurrentPage((prev) => prev + 1);
  }, []);

  return (
    <>
      {numberOfPages > 1 && (
        <Container>
          <div>
            {currentPage > 1 && (
              <PreviousButton
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                sliceIndex={sliceIndex}
                categories={categories}
                setActiveCategories={setActiveCategories}
              />
            )}
          </div>
          <PaginationBtnContainer2>
            {currentPage < numberOfPages && (
              <NextButton
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                sliceIndex={sliceIndex}
                categories={categories}
                setActiveCategories={setActiveCategories}
              />
            )}
          </PaginationBtnContainer2>
        </Container>
      )}
    </>
  );
};
