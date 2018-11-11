import { cn } from '@bem-react/classname';
import * as React from 'react';
import { EventItem } from '../EventItem/EventItem';

import './EventArea.css';

const cnEventArea = cn('EventArea');

export interface IEventAreaProps {
  className?: string;
}

export const EventArea: React.SFC<IEventAreaProps> = (props) => (
  <div className={cnEventArea()}>
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
    <EventItem />
  </div>
);
