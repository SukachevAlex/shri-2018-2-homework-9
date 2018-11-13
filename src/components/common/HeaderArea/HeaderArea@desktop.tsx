import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Logo } from '../Logo/Logo';
import { Link } from '../Nav/Link/index';
import { Nav } from '../Nav/Nav';
import navLinks from './NavLinks';

import './HeaderArea.css';

const cnHeaderArea = cn('HeaderArea');

export interface IHeaderAreaProps {
  className?: string;
}

const NavItems = navLinks.map((item, index) => {
  return <Link url={item.url} target="_self" text={item.text} size="big" active={!index} key={item.text} /> 
});

export const HeaderArea: React.SFC<IHeaderAreaProps> = (props) => (
  <div className={cnHeaderArea()}>
    <Logo className={cnHeaderArea('Logo')}/>
    <Nav className={cnHeaderArea('Nav')}>
      {NavItems}
    </Nav>
  </div>
);

