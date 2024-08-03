import { Button } from 'components/styled';
import { useRef, useState } from 'react';
import { Popup } from 'components';
import type { PropsWithChildren } from 'react';
import type { ButtonProps } from 'components/styled';

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
