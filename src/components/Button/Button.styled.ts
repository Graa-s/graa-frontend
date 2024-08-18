import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { autoClamp } from 'components/styled/utils';

export type StyledButtonProps = {
  $variant?: 'outlined' | 'colored';
  $color?: 'blue' | 'black' | 'green';
  $block?: boolean;
  href?: string;
  to?: string;
}
  & ButtonHTMLAttributes<HTMLButtonElement>
  & AnchorHTMLAttributes<HTMLAnchorElement>;

export const StyledButton = styled.button.attrs<StyledButtonProps>(props => {
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
  flex: none;
  padding: 0 ${autoClamp(10, 11)};
  height: ${autoClamp(39, 50)};
  min-width: ${autoClamp(39, 50)};
  display: ${props => props.hidden ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius}px;
  background: none;
  text-decoration: none;
  font: inherit;
  letter-spacing: inherit;
  cursor: pointer;
  transition: ${props => props.theme.transition(['color', 'background-color', 'border'])};

  &:hover {
    background-color: ${props => props.theme.hoverBackgroundColor};
  }
  
  ${props => props.$block && 'width: 100%'};

  ${props => props.$variant === 'outlined' && css`
    color: ${props => props.theme.color};
    font-weight: 500;
  `};
  
  ${props => props.$variant === 'colored' && css`
    color: white;
    font-weight: 600;
  `};

  ${props => props.$color === 'blue' && props.$variant === 'colored' && css`
    background-color: #007AFF;
    
    &:hover {
      background-color: #268EFF;
    }
  `};
`;

export const IconWrapper = styled.span<{ $minSize?: number, $maxSize?: number }>`
  display: inline-flex;
  
  > * {
    ${props => {
      const size = autoClamp(props.$minSize || 19, props.$maxSize || 28);
      
      return css`
        width: ${size};
        height: ${size};
      `;
    }};
  }
`;
