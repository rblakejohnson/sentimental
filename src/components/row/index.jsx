import styled from 'styled-components';
import { sizes } from '../style/variables';

const alignMap = {
  start: 'start',
  center: 'center',
  end: 'end',
};

const justifyMap = {
  start: 'start',
  center: 'center',
  end: 'end',
  'space-between': 'space-between',
};

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify = justifyMap.start }) =>
    justifyMap[justify] ?? justifyMap.start};
  gap: ${({ gap = sizes.none }) => sizes[gap] ?? sizes.none};
  align-items: ${({ align = alignMap.start }) =>
    alignMap[align] ?? alignMap.start};
`;
