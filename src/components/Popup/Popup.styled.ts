import styled from 'styled-components';
import { FloatingBlock } from 'components/styled';
import { disclosureTransition } from 'components/styled/parts';
import type { DisclosureTransitionProps } from 'components/styled/parts';

export const StyledPopup = styled(FloatingBlock)<DisclosureTransitionProps>`
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
  transition: ${props => props.theme.transition('background-color')};
  ${disclosureTransition}
`;
