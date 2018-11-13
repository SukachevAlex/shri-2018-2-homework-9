import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { HeaderArea } from './components/common/HeaderArea/HeaderArea@desktop'; 

const registry = new Registry({id: cn("App")() });

registry.set(cn("HeaderArea")(), HeaderArea);

export const AppDesktop = withRegistry(registry)(AppCommon);
