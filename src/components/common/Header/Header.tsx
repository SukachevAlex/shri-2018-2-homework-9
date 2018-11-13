
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import * as React from 'react';

import './Header.css';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnHeaderArea = cn('HeaderArea');

export interface IHeaderProps {
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <RegistryConsumer>
    {
      registries => {
        const registry = registries[cnApp()];
        const HeaderArea = registry.get(cnHeaderArea());

        return (
          <div className={cnHeader({},[props.className])}>
            <HeaderArea />
          </div>
        );
      }
    }
  </RegistryConsumer>
);
