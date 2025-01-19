import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
`;

export const Ft = styled.div`
  background-color: var(--black);
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  button {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CF = styled.form`
  padding: 1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: var(--font-bold-500);
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 15px;
    border: 1px solid var(--primary-tint);
    border-radius: var(--rounded-10);

    &:focus {
      outline: 0;
      border: 1.5px solid var(--primary-color);
    }
  }

  button {
    width: 100%;
    text-align: center;
    padding: 0.6rem 1rem;
    border-radius: var(--rounded-100);
    background-color: var(--primary-color);
    color: var(--primary-tint);
  }
  button:hover {
  }
`;
