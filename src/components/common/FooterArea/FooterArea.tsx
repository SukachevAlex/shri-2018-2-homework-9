import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Copyright } from '../Copyright/Copyright';
import { Link } from '../Nav/Link/index';
import { Nav } from '../Nav/Nav';
import navLinks from './NavLinks';

import './FooterArea.css';

const cnFooter = cn('FooterArea');

export interface IFooterAreaProps {
  className?: string;
}

const NavItems = navLinks.map((item, index) => {
  return <Link url={item.url} target="_self" text={item.text} size="small" key={item.text}/>
});

export const FooterArea: React.SFC<IFooterAreaProps> = (props) => (
  <div className={cnFooter()}>
    <Nav className={cnFooter('Nav')}>
      {NavItems}
    </Nav>
    <Copyright />
  </div>
);
