import { compose } from '@bem-react/core';
import { Link } from './Nav-Link';

import { NavLinkSizeBig } from './_size/Nav-Link_size_big';
import { NavLinkSizeSmall } from './_size/Nav-Link_size_small';

import { NavLinkActive } from './_active/Nav-Link_active';

export const LinkSizeBig = compose(NavLinkSizeBig)(Link);

export const LinkSizeSmall = compose(NavLinkSizeSmall)(Link);

export const LinkActiveBig = compose(NavLinkActive, NavLinkSizeBig)(Link);
