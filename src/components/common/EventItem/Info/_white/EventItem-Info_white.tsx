import { withBemMod } from '@bem-react/core';
import { IEventItemInfoProps } from '../EventItem-Info';

import './EventItem-Info_white.css';

export const EventItemInfoWhite = withBemMod<IEventItemInfoProps>('EventItem-Info', { white: true });
