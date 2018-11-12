import { compose } from '@bem-react/core';
import { EventItemInfo as Base } from './EventItem-Info';

import { EventItemInfoWhite } from './_white/EventItem-Info_white';

export const EventItemInfo = compose(EventItemInfoWhite)(Base);
