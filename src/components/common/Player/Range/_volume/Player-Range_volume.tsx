import { withBemMod } from '@bem-react/core';
import { IPlayerRangeProps } from '../index';

import './Player-Range_volume.css';

export const PlayerRangeVolume =  withBemMod<IPlayerRangeProps>('Player-Range', { volume: true });
