import { cn } from '@bem-react/classname';
import * as React from 'react';
import { 
  EventItemCriticalL, 
  EventItemCriticalM, 
  EventItemCriticalS, 
  EventItemL, 
  EventItemM, 
  EventItemS  
} from '../EventItem/index';

import './EventArea.css';

const cnEventArea = cn('EventArea');

export interface IEventAreaProps {
  className?: string;
}

export const EventArea: React.SFC<IEventAreaProps> = (props) => (
  <div className={cnEventArea()}>
    <EventItemL size="l"/>
    <EventItemM size="m" />
    <EventItemCriticalL critical={true} size="l" />
    <EventItemS size="s" />
    <EventItemS size="s"/>
    <EventItemL size="l" />
    <EventItemCriticalM critical={true} size="m"/>
    <EventItemS size="s" />
    <EventItemM size="m" />
    <EventItemCriticalS critical={true} size="s"/>
  </div>
);
