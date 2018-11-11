import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Main.css';

const cnMain = cn('Main');

export interface IMainProps {
  className?: string;
}

export const Main: React.SFC<IMainProps> = (props) => (
  <div className={cnMain({},[props.className])}>
    Content
  </div>
);
