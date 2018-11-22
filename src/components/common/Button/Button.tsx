import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Button.css';
import { IButtonProps } from './index';

const cnButton = cn('Button');


export const Button: React.SFC<IButtonProps> = ({active, text, mix}) =>  {
  return (
    <div className={[cnButton({active}), mix].join(' ')}>{text}</div>
  );
}
