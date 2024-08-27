import { Wrapper, StyledSelect, Options, StyledOption } from './Select.styled';
import { ReactNode, useRef, useState } from 'react';
import { Popup } from 'components';
import type { MouseEvent } from 'react';

export type Option = {
  value: string;
  label: ReactNode;
}

export type Props = {
  options: Option[];
}

function Select(props: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [opened, setOpened] = useState<boolean>(false);

  function handleSelectClick(event: MouseEvent) {
    event.preventDefault();
    (event.currentTarget as HTMLElement).focus();
    setOpened(prevState => !prevState);
  }

  return (
    <Wrapper ref={wrapperRef}>
      <StyledSelect ref={selectRef} onMouseDown={handleSelectClick}>
        {props.options.map(({ value }) => <option value={value} key={value} />)}
      </StyledSelect>

      <Popup opened={opened} setOpened={setOpened} containerRef={wrapperRef}>
        <Options>
          {props.options.map(({ value, label }) => (<>
            <StyledOption key={value}>{label}</StyledOption>
            <StyledOption key={value}>{label}</StyledOption>
        <StyledOption key={value}>{label}</StyledOption>
        <StyledOption key={value}>{label}</StyledOption>
        <StyledOption key={value}>{label}</StyledOption></>
          ))}
        </Options>
      </Popup>
    </Wrapper>
  );
}

export default Select;
