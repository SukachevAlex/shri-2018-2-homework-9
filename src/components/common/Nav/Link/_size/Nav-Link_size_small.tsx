import { withBemMod } from '@bem-react/core';
import { INavLinkProps } from '../index';

import './Nav-Link_size_small.css';

export const NavLinkSizeSmall = withBemMod<INavLinkProps>('Nav-Link', {size: 'small'});