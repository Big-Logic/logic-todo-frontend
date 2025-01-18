import styled, { css } from "styled-components";

export const Container = styled.div`
  border-radius: var(--rounded-10);
  padding: 0.6rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const NameImageContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 0.6rem;
`;

export const ImageContainer = styled.div`
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.h3`
  font-size: var(--font-normal);
`;

export const DT = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ttBtnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
