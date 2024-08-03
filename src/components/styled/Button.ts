import styled, { css } from 'styled-components';
import { border, borderRadius } from 'constants/styled';
import { Link } from 'react-router-dom';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type Props = {
  $variant?: 'outlined' | 'colored';
  $color?: 'blue' | 'black' | 'green';
  $icon?: string,
  $block?: boolean,
  href?: string,
  to?: string
}
  & ButtonHTMLAttributes<HTMLButtonElement>
  & AnchorHTMLAttributes<HTMLAnchorElement>;

export default styled.button.attrs<Props>((props) => {
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
  border: ${border};
  border-radius: ${borderRadius}px;
  background: none;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: inherit;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #F4F4F4;
  }
  
  ${props => props.$block && 'width: 100%'};

  ${props => props.$variant === 'outlined' && css`
    color: black;
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

  &:before {
    ${props => props.$icon && 'content: \'\';'}
    width: 28px;
    height: 28px;
    display: inline-block;
    ${(props) => props.$icon && `background: url(${props.$icon}) center no-repeat;`}
  }
`;
