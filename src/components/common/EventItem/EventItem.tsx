import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IEventItem } from './EventItem.d';

import './EventItem.css';
import { Icon } from './Icon/index';
import { Title } from './Title/EventItem-Title';

const cnEventItem = cn('EventItem');

export interface IEventItemProps extends IEventItem {
  className?: string;
  critical?: boolean;
}

export const EventItem: React.SFC<IEventItemProps> = ({critical, size, icon, title}) => (
  <div className={cnEventItem({critical, size})}>
    <div className={cnEventItem('TopLine')}>
      <div className={cnEventItem('Info')}>
        <div className={cnEventItem('Header')}>
          <Icon icon={icon} />
          <Title title={title} />
        </div>
        <div className={cnEventItem('Main')} />
      </div>
    </div>
    <div className={cnEventItem('BottomLine')}>
      <div className={cnEventItem('Footer')} />
      <div className={cnEventItem('Data')} />
    </div>
  </div>
);
