import { useState, useRef, type PropsWithChildren } from 'react';
import { Button, Popup, type ButtonProps } from 'components';

export type Props = PropsWithChildren<{
  buttonProps: PropsWithChildren<ButtonProps>,
}>;

function DropdownFromButton({ buttonProps, children }: Props) {
  const [opened, setOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  return <span ref={dropdownRef}>
    <Button {...buttonProps} onClick={() => setOpened(prevState => !prevState)} />

    <Popup
      opened={opened}
      setOpened={setOpened}
      containerRef={dropdownRef}
    >
      {children}
    </Popup>
  </span>;
}

export default DropdownFromButton;
