import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Description.css';

const cnEventItem = cn('EventItem');

export interface IEventItemDescriptionProps {
  className?: string;
  description?: string | null;
}

export const Description: React.SFC<IEventItemDescriptionProps> = (props) => (
  <div className={cnEventItem('Description')}> {props.description}</div>
);
