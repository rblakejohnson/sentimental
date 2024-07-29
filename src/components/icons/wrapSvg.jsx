import styled from 'styled-components';
import { spacing24 } from '../style/variables';

export const wrapSvg = (Comp) =>
  styled(Comp)`
    width: ${({ size = spacing24 }) => size};
    height: ${({ size = spacing24 }) => size};
  `;
