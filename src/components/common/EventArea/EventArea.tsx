import { cn } from '@bem-react/classname';
import * as React from 'react';

import * as Data from '../EventItem/EventItems.json';
import { EventItem } from '../EventItem/index';

import './EventArea.css';

const cnEventArea = cn('EventArea');

export interface IEventAreaProps {
  className?: string;
}

const events = Data.events.map((elem) => {
  return <EventItem critical={elem.type === 'critical'} size={elem.size} key={elem.icon} />
});
 
export const EventArea: React.SFC<IEventAreaProps> = (props) => (
  <div className={cnEventArea()}>

    {events}
  </div>
);
