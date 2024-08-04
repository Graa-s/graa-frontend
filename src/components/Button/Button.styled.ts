import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type Props = {
  $variant?: 'outlined' | 'colored';
  $color?: 'blue' | 'black' | 'green';
  $icon?: ReactNode,
  $block?: boolean,
  href?: string,
  to?: string
}
  & ButtonHTMLAttributes<HTMLButtonElement>
  & AnchorHTMLAttributes<HTMLAnchorElement>;

export const StyledButton = styled.button.attrs<Props>(props => {
  const as = props.to
    ? Link
    : props.href
      ? 'a'
      : 'button';

  return {
    as,
    target: props.href ? '_blank' : undefined,
    rel: props.href ? 'noopener noreferrer' : undefined,
    $variant: props.$variant || 'outlined',
    $color: props.$color || 'blue',
  };
})`
  padding-inline: 11px;
  height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius}px;
  background: none;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hoverBackgroundColor};
  }
  
  ${props => props.$block && 'width: 100%'};

  ${props => props.$variant === 'outlined' && css`
    color: ${props => props.theme.color};
    font-weight: 500;
  `}
  
  ${props => props.$variant === 'colored' && css`
    color: white;
    font-weight: 600;
  `}

  ${props => props.$color === 'blue' && props.$variant === 'colored' && css`
    background-color: #007AFF;
    
    &:hover {
      background-color: #268EFF;
    }
  `}
`;
