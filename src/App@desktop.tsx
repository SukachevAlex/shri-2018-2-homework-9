import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { Header } from './components/common/Header/Header@desktop'; 

const registry = new Registry({id: cn("App")() });

registry.set(cn('Header')(), Header);

export const AppDesktop = withRegistry(registry)(AppCommon);
