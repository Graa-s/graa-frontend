import { Link } from 'react-router-dom';
import {
  StyledProperty, PropertyIcon,
  PropertyTitle, PropertyValue,
} from './Property.styled';
import type { ReactNode } from 'react';
import type { PropertyIconProps, StyledPropertyProps } from './Property.styled';
import { ArrowBigIcon } from 'assets/icons';

export type Props = {
  title: ReactNode,
  subtitle?: ReactNode,
  icon?: PropertyIconProps['$icon'],
  as?: string | typeof Link,
} & StyledPropertyProps

function Property({ title, subtitle, icon, ...restProps }: Props) {
  const isLink = restProps.as === 'a' || restProps.as === Link;

  return (
    <StyledProperty {...restProps}>
      {icon && <PropertyIcon $icon={icon} />}

      <div>
        <PropertyTitle>{title}</PropertyTitle>
        <PropertyValue>{subtitle}</PropertyValue>
      </div>

      {isLink && <ArrowBigIcon width={24} height={24} />}
    </StyledProperty>
  );
}

export default Property;
