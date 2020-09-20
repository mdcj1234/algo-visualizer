/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  isSelected?: boolean;
}
const SideBarButton: React.FC<ButtonProps> = ({
  icon: Icon,
  isSelected = false,
  children,
  ...rest
}) => (
  <Container type="button" isSelected={isSelected} {...rest}>
    {Icon && <Icon size={16} />}
    {children}
  </Container>
);

export default SideBarButton;
