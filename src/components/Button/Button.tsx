import { StyledButton } from './Button.styled';
import type { Props as ButtonProps } from './Button.styled';

function Button({ $icon, children, ...restProps }: ButtonProps) {
  return <StyledButton {...restProps}>
    {$icon}
    {children}
  </StyledButton>;
}

export default Button;
