import { IClassNameProps } from "@bem-react/core";

export interface IEventItemIconProps extends IClassNameProps {
  className?: string;
  icon?: string;
  ac?: boolean;
  battery?: boolean;
  cam?: boolean;
  fridge?: boolean;
  kettle?: boolean;
  key?: boolean;
  music?: boolean;
  robotCleaner?: boolean;
  router?: boolean;
  stats?: boolean;
  thermal?: boolean;
}