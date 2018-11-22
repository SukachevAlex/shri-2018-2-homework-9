import { compose, IClassNameProps } from '@bem-react/core';
import { Link as Base } from './Nav-Link';

import { NavLinkSizeBig } from './_size/Nav-Link_size_big';
import { NavLinkSizeSmall } from './_size/Nav-Link_size_small';

import { NavLinkActive } from './_active/Nav-Link_active';

export interface INavLinkProps extends IClassNameProps {
  active?: boolean;
  size?: 'small' | 'big';
  target?: '_self' | '_blank';
  text?: string;
  url?: string;
}

export const Link = compose(
  NavLinkSizeBig,
  NavLinkSizeSmall,
  NavLinkActive,
)(Base);
