import styled from 'styled-components';
import type { Theme } from 'types/themes';

export const StyledPopup = styled.div<{ $transitionDuration: Theme['transitionDuration'] }>`
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  z-index: 1;
  width: max-content;
  display: none;
  border: 1px solid #0000000D;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0 4px 50px 0 #00000040;

  &.enter {
    transform: scale(1.05);
    display: block;
    opacity: 0;
  }

  &.enter-active {
    transform: scale(1);
    opacity: 1;
    transition: all ${props => props.$transitionDuration}ms ease-in-out;
  }

  &.enter-done {
    display: block;
  }

  &.exit {
    transform: scale(1);
    display: block;
    opacity: 1;
  }

  &.exit-active {
    transform: scale(0.9);
    opacity: 0;
    transition: all ${props => props.$transitionDuration}ms ease-in-out;
  }

  &.exit-done {
    display: none;
  }
`;
