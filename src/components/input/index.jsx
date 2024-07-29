import styled from 'styled-components';
import { colorNeutral200, spacing8 } from '../style/variables';
import { SearchIcon } from '../icons/search';

export const Input = styled.input.attrs(({ type = 'text' }) => ({
  type,
}))`
  padding: ${spacing8} ${spacing8};
  padding-left: ${({ hasIcon }) => (hasIcon ? '36px' : spacing8)};
  border-radius: 4px;
  border: 1px solid ${colorNeutral200};
  width: 100%;
`;

export const IputWithIcon = styled.div`
  position: relative;
  flex-basis: 320px;

  svg {
    position: absolute;
    left: ${spacing8};
    top: ${spacing8};
    width: 20px;
    height: 20px;
  }
`;

export const SearchInput = (props) => (
  <IputWithIcon>
    <Input type="search" {...props} hasIcon />
    <SearchIcon />
  </IputWithIcon>
);
