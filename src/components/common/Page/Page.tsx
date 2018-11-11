import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import './Page.css';

const cnPage = cn('Page');

export interface IPageProps {
  className?: string;
}

export const Page: React.SFC<IPageProps> = (props) => (
  <div className={cnPage()}>
    <Header className={cnPage('Header')} />
    <Main className={cnPage('Main')} />
    <Footer className={cnPage('Footer')} />
  </div>
);
