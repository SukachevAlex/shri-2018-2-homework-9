import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Description.css';
import { IEventItemDescriptionProps } from './index';

const cnEventItem = cn('EventItem');

export const EventItemDescription: React.SFC<IEventItemDescriptionProps> = ({description, size}) => (
  <div className={cnEventItem('Description', {size})}> {description}</div>
);
