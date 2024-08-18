import {
  useState, useRef,
  cloneElement, isValidElement,
} from 'react';
import { Popup } from 'components';
import type { PropsWithChildren, ReactElement, ButtonHTMLAttributes } from 'react';

export type Props = PropsWithChildren<{
  button: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>,
}>;

function DropdownFromButton({ button, children }: Props) {
  const [opened, setOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const validButton = isValidElement(button);
  const buttonProps = { onClick: () => setOpened(prevState => !prevState) };

  return (
    <span ref={dropdownRef}>
      {validButton && cloneElement(button, buttonProps)}

      <Popup
        opened={opened}
        setOpened={setOpened}
        containerRef={dropdownRef}
      >
      {children}
    </Popup>
  </span>
  );
}

export default DropdownFromButton;
