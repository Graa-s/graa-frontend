import { StyledFormItem, Label } from './FormItem.styled';
import type { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  label?: string;
}>;

function FormItem({ children, ...props }: Props) {
  return (
    <StyledFormItem {...props} style={{ display: 'flex', flexDirection: 'column' }}>
      {props.label && <Label>{props.label}</Label>}
      {children}
    </StyledFormItem>
  );
}

export default FormItem;
