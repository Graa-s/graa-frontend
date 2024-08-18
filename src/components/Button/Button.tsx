import { StyledButton, IconWrapper } from './Button.styled';
import type { ReactNode } from 'react';
import type { StyledButtonProps } from './Button.styled';

export type Props = {
  icon?: ReactNode | {
    component: ReactNode;
    /** @units px */
    minSize?: number;
    /** @units px */
    maxSize?: number;
  };
} & StyledButtonProps;

function Button({ icon, children, ...restProps }: Props) {
  let iconNode: ReactNode;
  if (icon && typeof icon === 'object' && 'component' in icon) {
    iconNode = (
      <IconWrapper
        $minSize={icon.minSize}
        $maxSize={icon.maxSize}
      >
        { icon.component }
      </IconWrapper>
    );
  }
  else {
    iconNode = <IconWrapper>{ icon }</IconWrapper>;
  }

  return (
    <StyledButton {...restProps}>
      {iconNode}
      {children}
    </StyledButton>
  );
}

export default Button;
