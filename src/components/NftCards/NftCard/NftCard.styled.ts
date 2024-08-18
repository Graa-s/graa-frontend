import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NftCardLink = styled(Link)`
  width: 100%;
  padding: 10px 10px 15px 10px;
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

export const NftImage = styled.img`
  border-radius: ${props => props.theme.borderRadius}px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  margin-top: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`;

export const Description = styled.p`
  overflow: hidden;
  margin-top: 10px;
  max-height: 34px;
  font-size: 14px;
  font-weight: 500;
  color: #63707D;
`;
