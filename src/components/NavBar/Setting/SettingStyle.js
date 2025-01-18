import { motion } from "motion/react";
import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background-color: var(--white);
  color: white;
  width: 16rem;
  padding: var(--padding-2-1_5);
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  border-radius: var(--rounded-100);
  margin-top: 1rem;
  background-color: #f5f5f5;
  color: red;
`;

export const SettingLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  border-radius: var(--rounded-100);
  &:hover {
    background-color: #f5f5f5;
  }
`;
