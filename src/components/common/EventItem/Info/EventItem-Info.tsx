import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Info.css';

const cnEventItem = cn('EventItem');

export interface IEventItemInfoProps {
  className?: string;
}

export const EventItemInfo: React.SFC<IEventItemInfoProps> = (props) => (
  <div className={cnEventItem('Info')} />
);
