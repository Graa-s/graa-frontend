import styled from 'styled-components';
import { ThemeName } from 'types/themes';

export const StyledInfo = styled.div`
  margin: 35px 50px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: ${props => props.theme.borderRadius}px;
  ${props => {
    if (props.theme.themeName === ThemeName.Light) return 'background-color: #F8F8F8';
    else return `border: ${ props.theme.border}`;
  }};
`;

export const CollectionImage = styled.img`
  border-radius: ${props => props.theme.borderRadius}px;
  object-fit: cover;
`;

export const Main = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h2`
  margin-right: 3px;
  font-size: 20px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 11px;
  width: 371px;
`;

export const CollectionProperties = styled.ul`
  display: flex;
  gap: 25px;
`;
