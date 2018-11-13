import { cn } from '@bem-react/classname';
import * as React from 'react';
import { IData } from '../EventItem.d';
import { Graph } from '../Graph/EventItem-Graph';
import { Thermal } from '../Thermal/EventItem-Thermal';
import './EventItem-Data.css';

const cnEventItem = cn('EventItem');

export interface IEventItemDataProps extends IData{
  className?: string;
  data: IData | null;
  icon?: string;
}

export const Data: React.SFC<IEventItemDataProps> = (data, icon) => (
  <div className={cnEventItem('Data')}>
    {icon === 'stats' && <Graph />}
    {data.humidity && data.temperature && <Thermal humidity={data.humidity} temperature={data.temperature}/>}
  </div>
);


