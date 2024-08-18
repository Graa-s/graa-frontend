import styled from 'styled-components';
import { verifiedIcon } from 'assets/icons';
import type { HTMLAttributes } from 'react';

export type Props = {
  $width?: number,
  $height?: number,
} & HTMLAttributes<HTMLSpanElement>;

export default styled.span.attrs<Props>(props => ({
  title: props.title || 'Verified',
}))`
  margin-left: 3px;
  display: inline-block;
  width: ${props => props.$width || 20}px;
  height: ${props => props.$height || 20}px;
  background: url(${verifiedIcon}) center/contain no-repeat;
  font-size: inherit;
  vertical-align: -0.2em;
`;
