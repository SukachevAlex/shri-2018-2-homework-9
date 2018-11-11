import { compose } from '@bem-react/core';
import { EventItem } from './EventItem';

import { EventItemCriticalTrue } from './_critical/EventItem_critical';
import { EventItemSizeL } from './_size/EventItem_size_l';
import { EventItemSizeM } from './_size/EventItem_size_m';
import { EventItemSizeS } from './_size/EventItem_size_s';

export const EventItemL = compose(EventItemSizeL)(EventItem);
export const EventItemM = compose(EventItemSizeM)(EventItem);
export const EventItemS = compose(EventItemSizeS)(EventItem);

export const EventItemCritical = compose(EventItemCriticalTrue)(EventItem);
export const EventItemCriticalL = compose(EventItemCriticalTrue, EventItemSizeL)(EventItem);
export const EventItemCriticalM = compose(EventItemCriticalTrue, EventItemSizeM)(EventItem);
export const EventItemCriticalS = compose(EventItemCriticalTrue, EventItemSizeS)(EventItem);
