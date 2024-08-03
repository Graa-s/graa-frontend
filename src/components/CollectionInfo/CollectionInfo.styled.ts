import styled from 'styled-components';
import { border, borderRadius } from 'constants/styled';

export const StyledInfo = styled.div`
  margin: 35px 50px 0;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: ${border};
  border-radius: ${borderRadius}px;
`;

export const CollectionImage = styled.img`
  border-radius: ${borderRadius}px;
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
  font-size: 14px;
`;

export const CollectionProperties = styled.ul`
  display: flex;
  gap: 25px;
`;
