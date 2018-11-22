import { withBemMod } from '@bem-react/core';
import { IPlayerRangeProps } from '../index';

import './Player-Range_time.css';

export const PlayerRangeTime =  withBemMod<IPlayerRangeProps>('Player-Range', { time: true });
