import styled from "styled-components";

export const Container = styled.li`
  margin: 0.6rem 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: var(--rounded-10);
  text-align: left;
  background-color: ${(props) =>
    props.$categoryName === props.$searchParamCategory ? "#f5f5f5" : "unset"};
`;
