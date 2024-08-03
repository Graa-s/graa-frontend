import styled, { css } from 'styled-components';
import { border, borderRadius } from 'constants/styled';
import { userIcon } from 'assets/icons';
import type { LinkProps } from 'react-router-dom';

export type StyledPropertyProps = Partial<LinkProps>;

export const StyledProperty = styled.div<StyledPropertyProps>`
  padding-inline: 20px;
  height: 70px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  border: ${border};
  border-radius: ${borderRadius}px;
  text-decoration: none;
  color: black;
`;

export type PropertyIconProps = { $icon?: string | boolean };

export const PropertyIcon = styled.div<PropertyIconProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${props => props.$icon && `background: url(${userIcon}) center/cover no-repeat`};
  ${props => typeof props.$icon === 'string' && css`
    background: url(${props.$icon}) center/cover no-repeat;
  `}
`;

export const PropertyTitle = styled.div`
  font-weight: 500;
  margin-bottom: 2px;
`;

export const PropertyValue = styled.span`
  color: #63707D;
  font-size: 14px;
  font-weight: 600;
`;
