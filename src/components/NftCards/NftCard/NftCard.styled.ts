import styled from 'styled-components';
import { borderRadius } from 'constants/styled';
import { Link } from 'react-router-dom';

export const NftCardLink = styled(Link)`
  width: 214px;
  height: 301px;
  padding: 10px 10px 15px 10px;
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 194px;
  height: 200px;
`;

export const NftImage = styled.img`
  border-radius: ${borderRadius}px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #63707D;
`;
