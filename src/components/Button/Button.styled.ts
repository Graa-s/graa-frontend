import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { autoClamp } from 'components/styled/utils';
import {
  ButtonColor,
  ButtonDisableResponsive,
  ButtonSize,
  ButtonVariant,
} from 'components/Button/types';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import type { KnownTarget } from 'styled-components/native/dist/dist/types.d';

export type ButtonProps = {
  $size?: ButtonSize;
  $variant?: ButtonVariant;
  $color?: ButtonColor;
  $round?: boolean;
  $block?: boolean;
  $disableResponsive?: ButtonDisableResponsive;
  href?: string;
  to?: string;
}
  & ButtonHTMLAttributes<HTMLButtonElement>
  & AnchorHTMLAttributes<HTMLAnchorElement>;

type StyledButtonProps = ButtonProps & {
  $onlyIcon: boolean;
}

export const StyledButton = styled.button.attrs<StyledButtonProps>(props => {
  let as: KnownTarget;
  if (props.to) as = Link;
  else if (props.href) as = 'a';
  else as = 'button';

  return {
    as,
    target: props.href && '_blank',
    rel: props.href && 'noopener noreferrer',
    $size: props.$size || ButtonSize.Medium,
    $variant: props.$variant || ButtonVariant.Outlined,
    $color: props.$color || ButtonColor.Blue,
  };
})`
  flex: none;
  padding-block: 0;
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
  
  ${props => props.$size === ButtonSize.Small && css`
    --button-height: ${switchableAutoClamp(19, 28, props.$disableResponsive)};
    padding-inline: ${switchableAutoClamp(5, 8, props.$disableResponsive)};
  `};

  ${props => props.$size === ButtonSize.Medium && css`
    --button-height: ${switchableAutoClamp(39, 50, props.$disableResponsive)};
    padding-inline: ${switchableAutoClamp(10, 11, props.$disableResponsive)};
  `};
  
  ${props => props.$size === ButtonSize.Large && css`
    --button-height: ${switchableAutoClamp(60, 72, props.$disableResponsive)};
    padding-inline: ${switchableAutoClamp(14, 20, props.$disableResponsive)};
  `};

  height: var(--button-height);
  min-width: var(--button-height);
  ${props => props.$onlyIcon && 'padding-inline: 0'};
  
  ${props => props.$variant === ButtonVariant.Outlined && css`
    color: ${props => props.theme.color};
    font-weight: 500;
  `};
  
  ${props => props.$variant === ButtonVariant.Colored && css`
    color: white;
    font-weight: 600;
  `};

  ${props => props.$color === ButtonColor.Blue && props.$variant === ButtonVariant.Colored && css`
    background-color: #007AFF;
    
    &:hover {
      background-color: #268EFF;
    }
  `};

  ${props => props.$color === ButtonColor.Black && props.$variant === ButtonVariant.Colored && css`
    background-color: #3D3D3D;

    &:hover {
      background-color: #5D5C5C;
    }
  `};
  
  ${props => props.$color === ButtonColor.Green && props.$variant === ButtonVariant.Colored && css`
    background-color: #14BC2F;
    
    &:hover {
      background-color: #22D33E;
    }
  `};
  
  ${props => props.$round && css`
    border-radius: var(--button-height);
    border: 1px solid #7F7F7F26;
  `};
`;

export type IconWrapperProps = {
  $buttonSize?: ButtonSize;
  $minSize?: number;
  $maxSize?: number;
  $disableResponsive?: ButtonDisableResponsive;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-flex;
  
  > * {
    ${props => props.$buttonSize === ButtonSize.Small && css`
      --icon-size: ${switchableAutoClamp(
        props.$minSize || 8,
        props.$maxSize || 12,
        props.$disableResponsive,
      )};
    `};

    ${props => props.$buttonSize === ButtonSize.Medium && css`
      --icon-size: ${switchableAutoClamp(
        props.$minSize || 19,
        props.$maxSize || 28,
        props.$disableResponsive,
      )};
    `};

    ${props => props.$buttonSize === ButtonSize.Large && css`
      --icon-size: ${switchableAutoClamp(
        props.$minSize || 32,
        props.$maxSize || 48,
        props.$disableResponsive,
      )};
    `};

    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

/**
 * @param minSize px
 * @param maxSize px
 * @param disableResponsive
 * @return clamp() | px
 */
function switchableAutoClamp(minSize: number, maxSize: number, disableResponsive?: ButtonDisableResponsive) {
  if (!disableResponsive) return autoClamp(minSize, maxSize);
  if (disableResponsive === ButtonDisableResponsive.MinSize) return minSize + 'px';
  if (disableResponsive === ButtonDisableResponsive.MaxSize) return maxSize + 'px';
}
