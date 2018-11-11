import { cn } from '@bem-react/classname';
import * as React from 'react';
import { MainArea } from '../MainArea/MainArea';

import './Main.css';

const cnMain = cn('Main');

export interface IMainProps {
  className?: string;
}

export const Main: React.SFC<IMainProps> = (props) => (
  <div className={cnMain({},[props.className])}>
    <MainArea />
  </div>
);
