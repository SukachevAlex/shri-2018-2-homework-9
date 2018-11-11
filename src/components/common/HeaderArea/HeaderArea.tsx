import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';
import { LinkActiveBig, LinkSizeBig } from '../Nav/Link/index';
import { Nav } from '../Nav/Nav';
import navLinks from './NavLinks';

import './HeaderArea.css';

const cnHeaderArea = cn('HeaderArea');

export interface IHeaderAreaProps {
  className?: string;
}

const NavItems = navLinks.map((item, index) => {
  if (!index) {
    return <LinkActiveBig url={item.url} target="_self" text={item.text} size="big" active={true} key={item.text}/>
  } else {
    return <LinkSizeBig url={item.url} target="_self" text={item.text} size="big" key={item.text}/>
  }
});

export const Area: React.SFC<IHeaderAreaProps> = (props) => (
  <div className={cnHeaderArea()}>
    <Logo className={cnHeaderArea('Logo')}/>
    <Nav className={cnHeaderArea('Nav')}>
      {NavItems}
    </Nav>
    <Burger />
  </div>
);

