import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 10px 15px 10px;
  width: 100%;
`;

export const NftImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: #E2E3E6;
`;

export const NftName = styled.div`
  margin-top: 15px;
  width: 66%;
  height: 1.1em;
  border-radius: ${props => props.theme.borderRadius / 3 }px;
  background-color: #E2E3E6;
`;

export const NftDescriptionLine = styled.div<{ $width?: string }>`
  margin-top: 10px;
  height: 12px;
  width: ${props => props.$width || '100%'};
  border-radius: ${props => props.theme.borderRadius / 4}px;
  background-color: #E2E3E6;
  
  & + & {
    margin-top: 5px;
  }
`;
