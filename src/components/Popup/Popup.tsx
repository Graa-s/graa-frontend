import { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from 'styled-components';
import { useClickOutside } from 'hooks';
import { StyledPopup } from './Popup.styled';
import type { PropsWithChildren, Dispatch, SetStateAction, RefObject } from 'react';

export type Props = PropsWithChildren<{
  opened: boolean,
  setOpened: Dispatch<SetStateAction<boolean>>,
  containerRef: RefObject<HTMLElement>,
}>;

function Popup(props: Props) {
  const { opened, setOpened, containerRef, ...restProps } = props;

  const popupRef = useRef<HTMLDivElement>(null);

  const { transitionDuration } = useTheme();
  useClickOutside(containerRef, () => {
    setOpened(false);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.position = 'relative';
  }, [containerRef]);

  return (
    <CSSTransition nodeRef={popupRef} in={opened} timeout={transitionDuration}>
      <StyledPopup ref={popupRef} {...restProps} $transitionDuration={transitionDuration} />
    </CSSTransition>
  );
}

export default Popup;
