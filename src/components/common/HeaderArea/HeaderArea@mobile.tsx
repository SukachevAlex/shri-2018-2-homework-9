import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';

import './HeaderArea.css';

const cnHeaderArea = cn('HeaderArea');

export interface IHeaderAreaProps {
  className?: string;
}

export const HeaderArea: React.SFC<IHeaderAreaProps> = (props) => (
  <div className={cnHeaderArea()}>
    <Logo className={cnHeaderArea('Logo')}/>
    <Burger />
  </div>
);
