import styled from 'styled-components';
import { Badge } from 'components/styled';
import { container } from 'components/styled/parts';
import { autoClamp } from 'components/styled/utils';
import { Link } from 'react-router-dom';

export const Content = styled.main`
  ${container};
  padding-top: 35px;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
  margin-left: 9px;
  padding-inline: ${autoClamp(12, 50)};
  height: fit-content;
  //max-width: fit-content;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  min-width: 200px;
  min-height: 200px;
  max-width: fit-content;
  max-height: calc(80vh - 90px);
  aspect-ratio: 1;
`;

export const NftImage = styled.img`
   border-radius: ${props => props.theme.borderRadius}px;
   width: 100%;
   height: 100%;
`;

export const NftBadge = styled(Badge)`
  padding: 15px;
  padding: 11.5px;
  font-size: 16px;
`;

export const NftInfo = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SaleStatusWrapper = styled.span`
  display: flex;
  gap: 20px;
`;

export const SaleStatus = styled.span`
  flex-basis: 100%;
  padding-inline: 11px;
  height: 50px;
  min-width: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius}px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: default;
  transition: ${props => props.theme.transition('border')};
`;

export const NftMain = styled.span`
  padding: 20px;
  border-top: ${props => props.theme.border};
  border-right: ${props => props.theme.border};
  border-left: ${props => props.theme.border};
  border-radius: ${({ theme }) => `${theme.borderRadius + 8}px ${theme.borderRadius + 8}px 0 0`};
  transition: ${props => props.theme.transition('border')};
`;

export const NftNameWrapper = styled.h2`
  display: inline-flex;
  gap: 3px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const CollectionWrapper = styled(Link)`
  margin-block: 10px 15px;
  width: fit-content;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const CollectionImage = styled.span<{$icon: string}>`
  width: 35px;
  height: 35px;
  background: url(${props => props.$icon}) center/cover no-repeat;
  border-radius: 10px;
`;

export const CollectionName = styled.span`
  margin-inline: 10px 3px;
  font-size: 14px;
  font-weight: 600;
`;

export const ActionButtonWrapper = styled.div`
  margin-top: -20px;
  padding: 20px;
  border: ${props => props.theme.border};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius + 8}px ${theme.borderRadius + 8}px`};
  transition: ${props => props.theme.transition('border')};
`;

export const PropertiesTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const PropertiesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 25px;
`;
