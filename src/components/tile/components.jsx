import styled from "styled-components";
import { Card as CardBase } from "../card";
import { Stack } from "../stack";
import { spacing8, spacing16, breakWidth580 } from "../style/variables";

export const Container = styled.section`
  container-type: inline-size;
  container-name: cardContainer;
`;

export const Card = styled(CardBase)`
  display: grid;
  gap: ${spacing8};

  @container cardContainer (min-width: ${breakWidth580}) {
    grid-template-columns: 1fr auto;
    grid-column-gap: ${spacing16};
  }
`;

export const Header = styled.header`
  display: flex;
  gap: ${spacing16};
  justify-content: space-between;
  align-items: center;

  @container cardContainer (min-width: ${breakWidth580}) {
    justify-content: start;
    grid-column: 1;
  }
`;

export const Info = styled(Stack)`
  grid-column: 1;
`;

export const Actions = styled(Stack)`
  @container cardContainer (min-width: ${breakWidth580}) {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-items: start;
    justify-items: end;
    align-content: space-between;
  }
`;

export const Status = styled(Stack)`
  align-items: center;
  grid-template-columns: max-content max-content;
`;

export const ButtonGroup = styled(Stack)`
  grid-template-columns: 1fr auto;

  @container cardContainer (min-width: ${breakWidth580}) {
    order: -1;
  }
`;
