import styled from 'styled-components';
import {
  colorTeal500,
  colorNeutral200,
  colorNeutral600,
  colorSalmon500,
  fontSize14,
  spacing4,
  spacing8,
  colorSalmon200,
  colorTeal100,
} from '../style/variables';

const BadgeBase = styled.span`
  display: inline-flex;
  border-radius: 99px;
  padding: ${spacing4} ${spacing8};
  font-size: ${fontSize14};
  text-transform: uppercase;
  letter-spacing: .4px;
`;

export const BadgeDefault = styled(BadgeBase)`
  color: ${colorNeutral600};
  background: ${colorNeutral200};
`;

export const BadgeSuccess = styled(BadgeBase)`
  color: ${colorTeal500};
  background: ${colorTeal100};
`;

export const BadgeInfo = styled(BadgeBase)`
  color: ${colorSalmon500};
  background: ${colorSalmon200};
`;
