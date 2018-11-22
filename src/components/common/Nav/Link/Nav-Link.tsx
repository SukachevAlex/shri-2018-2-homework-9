import { cn } from '@bem-react/classname';
import * as React from 'react';

import { INavLinkProps } from './index';
import './Nav-Link.css';

const cnNav = cn('Nav');

export const Link: React.SFC<INavLinkProps> = ({active, size, target, text, url}) => (
<a className={cnNav('Link', {active, size})} href={url} target={target}>{text}</a>
);
