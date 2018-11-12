import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-TopLine.css';

const cnEventItem = cn('EventItem');

export interface IEventItemTopLineProps {
  className?: string;
}

export const TopLine: React.SFC<IEventItemTopLineProps> = (props) => (
  <div className={cnEventItem('TopLine')} />
);
