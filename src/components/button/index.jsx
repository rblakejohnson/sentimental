import styled from "styled-components";
import {
  colorNeutral0,
  colorNeutral900,
  colorNeutral300,
  colorSalmon500,
  spacing8,
  spacing16,
  colorTeal500,
} from "../style/variables";

export const ButtonA11y = styled.button.attrs(({ type = "button" }) => ({
  type,
}))`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-weight: bold;
`;

export const ButtonGhost = styled(ButtonA11y)`
  display: flex;
  padding-block: ${spacing8};
  padding-inline: ${spacing16};
  place-content: center;
  place-items: center;
  border-radius: 12px;
`;

export const ButtonPrimary = styled(ButtonGhost)`
  background: ${colorTeal500};
  color: ${colorNeutral0};
`;

export const ButtonSecondary = styled(ButtonGhost)`
  color: ${colorTeal500};
  background: ${colorNeutral0};
  border: 1px solid;
`;

export const ButtonIcon = styled(ButtonSecondary)`
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 99px;
`;

export const ButtonTabs = styled.div`
  display: flex;

  ${ButtonSecondary}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${ButtonSecondary}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
