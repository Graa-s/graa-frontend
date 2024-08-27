import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  
`;

export const ListItem = styled.li`
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

export const ListItemInner = styled.div<{ $clickable?: boolean }>`
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  transition: ${props => props.theme.transition('background-color')};
  
  :first-child > & {
    border-top-left-radius: ${props => props.theme.borderRadius}px;
    border-top-right-radius: ${props => props.theme.borderRadius}px;
  }

  :last-child > & {
    border-bottom-left-radius: ${props => props.theme.borderRadius}px;
    border-bottom-right-radius: ${props => props.theme.borderRadius}px;
  }

  ${props => props.$clickable && css`
    &:hover {
      background-color: ${props => props.theme.hoverBackgroundColor};
    }
  `};
`;
