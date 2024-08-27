import styled from 'styled-components';
import { FloatingBlock } from 'components/styled';
import { disclosureTransition } from 'components/styled/parts';
import type { DisclosureTransitionProps } from 'components/styled/parts';

export const BlurredBackground = styled.div`
  position: fixed;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.blurredBackgroundColor};
  
  &.enter {
    opacity: 0;
    display: flex;
  }
  
  &.enter-active {
    opacity: 1;
    transition: ${props => props.theme.transition('opacity')};
  }
  
  &.enter-done {
    opacity: 1;
    display: flex;
  }
  
  &.exit {
    display: flex;
  }
  
  &.exit-active {
    opacity: 0;
    transition: ${props => props.theme.transition('opacity')};
  }
`;

export const StyledModal = styled(FloatingBlock)<DisclosureTransitionProps>`
  max-width: fit-content;
  ${disclosureTransition}
`;

export const ModalHeader = styled.header`
  padding: 20px;
  min-width: 325px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.theme.border};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const ModalBody = styled.main`
  padding: 20px;
`;
