import { cn } from '@bem-react/classname';
import * as React from 'react';
import { EventArea } from '../EventArea/EventArea';
import { Title } from '../Title/Title';

import './MainArea.css';

const cnMainArea = cn('MainArea');

export interface IMainAreaProps {
  className?: string;
}

export const MainArea: React.SFC<IMainAreaProps> = (props) => (
  <div className={cnMainArea()}>
    <Title text="Лента событий" className={cnMainArea('Title')}/>
    <EventArea />
  </div>
);
