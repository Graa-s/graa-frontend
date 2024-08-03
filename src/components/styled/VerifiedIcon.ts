import styled from 'styled-components';
import { verifiedIcon } from 'assets/icons';
import type { HTMLAttributes } from 'react';

export type Props = {
  $width?: number,
  $height?: number,
} & HTMLAttributes<HTMLSpanElement>;

export default styled.span.attrs<Props>(props => {
  return { title: props.title || 'Verified' };
})`
  display: inline-block;
  width: ${({ $width }) => $width || 20}px;
  height: ${({ $height }) => $height || 20}px;
  background: url(${verifiedIcon}) center/contain no-repeat;
`;
