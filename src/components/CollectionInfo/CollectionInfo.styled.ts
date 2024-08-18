import styled from 'styled-components';
import { ThemeName } from 'types/themes';
import { autoClamp } from 'components/styled/utils';

export const StyledInfo = styled.div`
  margin-top: ${autoClamp(20, 35)};
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: ${props => props.theme.borderRadius}px;
  
  background-color: ${props => props.theme.themeName === ThemeName.Light
    ? '#F8F8F8'
    : 'hsla(0, 0%, 24%, 0.1)'
  };
  
  transition: ${props => props.theme.transition(['background-color', 'padding'])};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}px) {
    padding: 0;
    background-color: transparent;
  }
`;

export const CollectionImage = styled.img`
  align-self: flex-start;
  border-radius: ${props => props.theme.borderRadius}px;
  object-fit: cover;
`;

export const Main = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.div`
  display: inline;
  font-size: ${autoClamp(16, 20)};
  white-space: nowrap;
`;

export const Name = styled.h2`
  display: inline;
  font-size: inherit;
  font-weight: 700;
  white-space: normal;
`;

export const Description = styled.p`
  margin-top: 11px;
  max-width: 371px;
`;

export const CollectionProperties = styled.ul`
  display: flex;
  gap: 25px;
  
  @media(max-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;
