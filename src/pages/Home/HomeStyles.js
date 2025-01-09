import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: minmax(50px, 300px) minmax(300px, 1fr);
  align-items: start;
  gap: 2rem;
  height: 100vh;
  overflow: auto;
`;
