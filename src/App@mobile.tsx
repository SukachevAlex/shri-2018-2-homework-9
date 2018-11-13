import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import { App as AppCommon } from './App';

import { HeaderArea } from './components/common/HeaderArea/HeaderArea@mobile'; 

const registry = new Registry({id: cn("App")() });

registry.set(cn("HeaderArea")(), HeaderArea);

export const AppMobile = withRegistry(registry)(AppCommon);
