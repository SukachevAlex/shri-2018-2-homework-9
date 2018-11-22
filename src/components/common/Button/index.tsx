import { compose, IClassNameProps } from '@bem-react/core';
import { Button as Base } from './Button';

import { ButtonActive } from './_active/Button_active';

export interface IButtonProps extends IClassNameProps {
  className?: string;
  text?: string;
  active?: boolean;
  mix?: string;
}

export const Button = compose(
  ButtonActive
)(Base);
