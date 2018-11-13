import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IEventItem } from './EventItem.d';

import { Description } from './Description/EventItem-Description';
import './EventItem.css';
import { Icon } from './Icon/index';
import { Source } from './Source/EventItem-Source';
import { Time } from './Time/EventItem-Time';
import { Title } from './Title/EventItem-Title';

const cnEventItem = cn('EventItem');

export interface IEventItemProps extends IEventItem {
  className?: string;
  critical?: boolean;
}

export const EventItem: React.SFC<IEventItemProps> = ({critical, size, icon, title, source, time, description}) => (
  <div className={cnEventItem({critical, size})}>
    <div className={cnEventItem('TopLine')}>
      <div className={cnEventItem('Info')}>
        <div className={cnEventItem('Header')}>
          <Icon icon={icon} />
          <Title title={title} />
        </div>
        <div className={cnEventItem('Main')}>
          <Source source={source} />
          <Time time={time} />
        </div>
      </div>
    </div>
    <div className={cnEventItem('BottomLine')}>
      <div className={cnEventItem('Footer')}>
        <Description description={description} />
      </div>
      <div className={cnEventItem('Data')} />
    </div>
  </div>
);
