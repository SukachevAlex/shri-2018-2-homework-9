import { compose, IClassNameProps } from '@bem-react/core';
import { PlayerRange as Base } from './Player-Range';

import { PlayerRangeTime } from './_time/Player-Range_time';
import { PlayerRangeVolume } from './_volume/Player-Range_volume';

export interface IPlayerRangeProps extends IClassNameProps {
  className?: string;
  max?: number;
  min?: number;
  step?: number;
  time?: boolean;
  value?: string;
  volume?: boolean;
}

export const PlayerRange = compose(
  PlayerRangeTime,
  PlayerRangeVolume
)(Base);
