import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem.css';

const cnEventItem = cn('EventItem');

export interface IEventItemProps {
  className?: string;
}

export const EventItem: React.SFC<IEventItemProps> = (props) => (
  <div className={cnEventItem()}>1</div>
);
