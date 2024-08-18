import styled from 'styled-components';
import { flexSpacing } from 'components/styled/parts';
import { autoClamp } from 'components/styled/utils';

export const CardsList = styled.ul`
  margin-top: ${autoClamp(20, 35)};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
  gap: 10px;
  flex-wrap: wrap;
`;

export const Toolbar = styled.div`
  margin-top: ${autoClamp(20, 35)};
  ${flexSpacing};
  align-items: center;
`;

export const Heading = styled.h2`
  margin-right: auto;
  font-size: ${autoClamp(20, 30)};
  font-weight: 700;
`;

export const DropdownItem = styled.li`
  position: relative;

  & + & {
    padding-top: 1px;
  }

  & + &:before {
    content: '';
    position: absolute;
    inset: 0 0 calc(100% - 1px) 20px;
    display: block;
    background-color: #0000000D;
    cursor: pointer;
  }
`;

export const DropdownLink = styled.a`
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: ${props => props.theme.transition('background-color')};
  
  :first-child > & {
    border-top-left-radius: ${props => props.theme.borderRadius}px;
    border-top-right-radius: ${props => props.theme.borderRadius}px;
  }

  :last-child > & {
    border-bottom-left-radius: ${props => props.theme.borderRadius}px;
    border-bottom-right-radius: ${props => props.theme.borderRadius}px;
  }

  &:hover {
    background-color: ${props => props.theme.hoverBackgroundColor};
  }
`;
