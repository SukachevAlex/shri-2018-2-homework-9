
import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Area } from '../HeaderArea/HeaderArea';

import './Header.css';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <div className={cnHeader({},[props.className])}>
    <Area />
  </div>
);

