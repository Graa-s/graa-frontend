import styled from 'styled-components';
import { Badge } from 'components/styled';
import { border, borderRadius } from 'constants/styled';

export const Content = styled.main`
  margin: 35px 53px;
  display: flex;
  gap: 20px 50px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: 59px;
`;

export const NftImage = styled.img`
  border-radius: ${borderRadius}px;
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
  border: ${border};
  border-radius: ${borderRadius}px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: default;
`;

export const NftMain = styled.span`
  padding: 20px;
  border: ${border};
  border-bottom: none;
  border-radius: ${borderRadius + 8}px ${borderRadius + 8}px 0 0;
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
  border: ${border};
  border-radius: 0 0 ${borderRadius + 8}px ${borderRadius + 8}px;
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
