import styled from "styled-components";
import { colorNeutral200, colorNeutral900, spacing4 } from "../style/variables";

export const Select = styled.select`
  color: ${colorNeutral900};
  min-height: 32px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${colorNeutral200};
  padding-inline: ${spacing4};
`;
