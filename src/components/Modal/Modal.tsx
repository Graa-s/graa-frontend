import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useClickOutside } from 'hooks';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'components';
import { BlurredBackground, ModalBody, ModalHeader, StyledModal, Title } from './Modal.styled';
import { LargeCrossIcon } from 'assets/icons';
import { ButtonSize, ButtonDisableResponsive } from 'components/Button/types';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export type Props = PropsWithChildren<{
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  title?: string;
}>;

function Modal({ children, ...props }: Props) {
  const { transitionDuration } = useTheme();

  const isReadyToClose = useRef<boolean>(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    if (isReadyToClose.current) props.setOpened(false);
  });

  useEffect(() => {
    if (props.opened) {
      document.documentElement.classList.add('modal-opened');
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.documentElement.classList.remove('modal-opened');
      document.body.style.overflowY = '';
    };
  }, [props.opened]);


  return (
    <CSSTransition in={props.opened} nodeRef={backgroundRef} timeout={transitionDuration}>
      <BlurredBackground ref={backgroundRef}>
        <CSSTransition
          in={props.opened}
          nodeRef={modalRef}
          timeout={transitionDuration}
          onEntered={() => (isReadyToClose.current = true)}
          onExited={() => (isReadyToClose.current = false)}
        >
          <StyledModal ref={modalRef} $transitionDuration={transitionDuration}>
            <ModalHeader>
              <Title>{props.title}</Title>

              <Button
                icon={<LargeCrossIcon />}
                $size={ButtonSize.Small}
                $round
                $disableResponsive={ButtonDisableResponsive.MaxSize}
                onClick={() => props.setOpened(false)}
              />
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </StyledModal>
        </CSSTransition>
      </BlurredBackground>
    </CSSTransition>
  );
}

export default Modal;
