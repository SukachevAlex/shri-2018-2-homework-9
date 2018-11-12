import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IEventItem } from './EventItem.d';

import './EventItem.css';

const cnEventItem = cn('EventItem');

export interface IEventItemProps extends IEventItem {
  className?: string;
  critical?: boolean;
}

export const EventItem: React.SFC<IEventItemProps> = ({critical, size}) => (
  <div className={cnEventItem({critical, size})}>1</div>
);
