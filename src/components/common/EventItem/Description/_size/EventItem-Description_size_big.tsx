import { withBemMod } from '@bem-react/core';
import { IEventItemDescriptionProps } from '../index';

import './EventItem-Description_size_big.css';

export const EventItemDescriptionSizeBig =  withBemMod<IEventItemDescriptionProps>('EventItem-Description', { size: 'big' });
