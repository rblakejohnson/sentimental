import styled, { keyframes } from "styled-components";
import { colorTeal100 } from "../style/variables";

const kf = keyframes`
  from {
    transform: translateX(-100%);
  }
  to   {
    transform: translateX(200%);
  }
`;

export const Line = styled.div`
  background: ${colorTeal100};
  display: block;
  overflow: hidden;
  border-radius: 12px;

  &::before {
    animation: 2000ms ${kf} cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colorTeal100} 50%,
      transparent 100%
    );
    content: "";
    display: block;
    filter: brightness(1.2);
    transform: translateX(10%);
    height: 100%;
    width: 100%;
  }
`;

export const Lines = styled.div`
  display: grid;
  gap: ${({ gap = "8px" }) => gap};
  place-items: stretch;
  place-content: stretch;

  & > * {
    min-height: ${({ height = "16px" }) => height};
  }
`;
