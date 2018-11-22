import { compose, IClassNameProps } from '@bem-react/core';
import { EventItemDescription as Base } from './EventItem-Description';

import { EventItemDescriptionSizeBig } from './_size/EventItem-Description_size_big';

export interface IEventItemDescriptionProps extends IClassNameProps  {
  className?: string;
  description?: string | null;
  size?: string;
}

export const EventItemDescription = compose(
  EventItemDescriptionSizeBig
)(Base);
