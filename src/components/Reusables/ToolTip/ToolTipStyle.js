import styled, { css } from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  ${(props) => props.$customStyle}
`;

const tBoxTop = css`
  top: 0;
  transform: translateY(calc(-100% + -1rem));
`;
const tBoxBottom = css`
  bottom: 0;
  transform: translateY(calc(100% + 1rem));
`;

export const TtBox = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  overflow: hidden;
  border-radius: var(--rounded-10);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  ${(props) => (props.$position === "top" ? tBoxTop : tBoxBottom)}
  ${(props) => props.$customStyle}
`;

export const TtBtn = styled.button`
  ${(props) => props.$customStyle}
`;
