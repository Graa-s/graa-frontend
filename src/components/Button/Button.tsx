import { StyledButton, IconWrapper } from './Button.styled';
import type { ReactNode } from 'react';
import type { ButtonProps } from './Button.styled';

export type Props = {
  icon?: ReactNode | {
    component: ReactNode;
    /** @units px */
    minSize?: number;
    /** @units px */
    maxSize?: number;
  };
} & ButtonProps;

function Button({ icon, children, ...restProps }: Props) {
  let iconNode: ReactNode;
  if (icon && typeof icon === 'object' && 'component' in icon) {
    iconNode = (
      <IconWrapper
        $buttonSize={restProps.$size}
        $minSize={icon.minSize}
        $maxSize={icon.maxSize}
        $disableResponsive={restProps.$disableResponsive}
      >
        { icon.component }
      </IconWrapper>
    );
  }
  else {
    iconNode = <IconWrapper
      $buttonSize={restProps.$size}
      $disableResponsive={restProps.$disableResponsive}
    >
      { icon }
    </IconWrapper>;
  }

  return (
    <StyledButton $onlyIcon={iconNode && !children} {...restProps}>
      {iconNode}
      {children}
    </StyledButton>
  );
}

export default Button;
