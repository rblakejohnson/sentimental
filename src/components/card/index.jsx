import styled from 'styled-components';
import { colorNeutral0, colorNeutral300, spacing24 } from '../style/variables';

export const Card = styled.div`
  background: ${colorNeutral0};
  padding: ${spacing24};
  border: 1px solid ${colorNeutral300};
  border-radius: 16px;
`;
