import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Player.css';
import img from './Player.png';

const cnPlayer = cn('Player');

export interface IPlayerProps {
  className?: string;
}

export const Player: React.SFC<IPlayerProps> = () => (
  <img className={cnPlayer()} src={img} alt="Stub" />
);
