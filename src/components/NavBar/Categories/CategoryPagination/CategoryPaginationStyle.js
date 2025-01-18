import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0.6rem 1rem;
`;

export const PaginationBtnContainer2 = styled.div`
  display: flex;
  justify-content: right;
`;

export const PaginationBtn = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  font-size: 1.4rem;
`;
