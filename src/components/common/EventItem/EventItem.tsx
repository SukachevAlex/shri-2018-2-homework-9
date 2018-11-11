import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem.css';

const cnEventItem = cn('EventItem');

export interface IEventItemProps {
  className?: string;
  critical?: boolean;
  size?: 'l' | 'm' | 's';
}

export const EventItem: React.SFC<IEventItemProps> = ({critical, size}) => (
  <div className={cnEventItem({critical, size})}>1</div>
);
