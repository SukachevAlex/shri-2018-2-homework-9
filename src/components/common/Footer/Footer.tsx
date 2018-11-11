import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Copyright } from '../Copyright/Copyright';
import { FooterArea } from '../FooterArea/FooterArea';

import './Footer.css';

const cnFooter = cn('Footer');

export interface IFooterProps {
  className?: string;
}

export const Footer: React.SFC<IFooterProps> = (props) => (
  <div className={cnFooter({},[props.className])}>
    <FooterArea />
    <Copyright />
  </div>
);
