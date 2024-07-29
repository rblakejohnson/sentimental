import styled from 'styled-components';
import { spacing8, fontSize14, colorNeutral600 } from '../style/variables';

export const DefinitionList = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${spacing8};
  grid-row-gap: 4px;
  align-items: center;
  font-size: ${fontSize14};

  dt {
    grid-column: 1;
    justify-self: center;
    color: ${colorNeutral600};
  }

  dd {
    grid-column: 2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
