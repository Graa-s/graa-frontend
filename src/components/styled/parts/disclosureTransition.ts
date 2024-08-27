import { css } from 'styled-components';
import type { Theme } from 'types/themes';

export type Props = { $transitionDuration: Theme['transitionDuration'] };

export default css<Props>`
  &.enter {
    transform: scale(1.05);
    display: block;
    opacity: 0;
  }

  &.enter-active {
    transform: scale(1);
    opacity: 1;
    transition: ${props => props.theme.transition(
      ['opacity', 'transform'],
      props.$transitionDuration,
    )};
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
    transition: ${props => props.theme.transition(
      ['opacity', 'transform'],
      props.$transitionDuration,
    )};
  }

  &.exit-done {
    display: none;
  }
`;
