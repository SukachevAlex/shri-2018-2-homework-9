import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-BottomLine.css';

const cnEventItem = cn('EventItem');

export interface IEventItemBottomLineProps {
  className?: string;
}

export const BottomLine: React.SFC<IEventItemBottomLineProps> = (props) => (
  <div className={cnEventItem('BottomLine')} />
);
