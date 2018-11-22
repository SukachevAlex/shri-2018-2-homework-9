import { withBemMod } from '@bem-react/core';
import { IPlayerControllProps } from '../index';

import './Player-Controll_prev.css';

export const PlayerControllPrev =  withBemMod<IPlayerControllProps>('Player-Controll', { prev: true });
