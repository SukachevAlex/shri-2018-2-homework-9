import { cn } from '@bem-react/classname';
import * as React from 'react';

import { IPlayerControllProps } from './index';
import './Player-Controll.css';

const cnPlayer = cn('Player');

export const PlayerControll: React.SFC<IPlayerControllProps> = ({prev, next}) => (
  <button className={cnPlayer('Controll', {prev, next})} />
);
