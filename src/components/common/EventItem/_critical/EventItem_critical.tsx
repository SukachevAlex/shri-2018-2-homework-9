import { withBemMod } from '@bem-react/core';
import { IEventItemProps } from '../EventItem';

import './EventItem_critical.css';

export const EventItemCriticalTrue =  withBemMod<IEventItemProps>('EventItem', { critical: true });
