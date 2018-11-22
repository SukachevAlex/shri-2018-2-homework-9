import { withBemMod } from '@bem-react/core';
import { IButtonProps } from '../index';

import './Button_active.css';

export const ButtonActive =  withBemMod<IButtonProps>('Button', { active: true });
