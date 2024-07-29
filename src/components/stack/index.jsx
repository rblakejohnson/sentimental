import styled from 'styled-components';
import { sizes } from '../style/variables';

export const Stack = styled.div`
  display: grid;
  gap: ${({ gap = sizes.none }) => sizes[gap] ?? sizes.none};
`;
