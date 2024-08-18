import styled from 'styled-components';
import { Badge } from 'components/styled';
import { container } from 'components/styled/parts';

export const Content = styled.div.attrs({ as: 'main' })`
  ${container};
  padding-block: 35px;
  display: flex;
  gap: 20px 50px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: 59px;
`;

export const NftImage = styled.img`
  border-radius: ${props => props.theme.borderRadius}px;
`;

export const NftBadge = styled(Badge)`
  padding: 15px;
  font-size: 16px;
`;

export const NftInfo = styled.div`
  flex-basis: 100%;
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
  border: ${props => props.theme.border};
  border-bottom: none;
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
