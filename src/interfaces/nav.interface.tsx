import { MenuItemInterface } from '@/components/Menu';

export type actionItemTypes =
  | 'ICON_BUTTON'
  | 'FAB'
  | 'MENU'
  | 'AVATAR'
  | 'DROPDOWN'
  | 'POPOVER'
  | 'TOGGLE'
  | 'LINK'
  | 'TEXT'
  | 'LOGO';
export interface NavItemInterface {
  id: string | number;
  position: 'START' | 'CENTER' | 'END';
  itemType: actionItemTypes;
  urlTo: string;
  label: string;
  showLabel?: boolean;
  icon: string;
  showIcon?: boolean;
  width: string | number | 25;
  imageUrl?: string;
  //   for Menus Like DROPDOWN and POPOVER
  menuItems?: MenuItemInterface[];
  //   Optionals
  className?: string;
  iconClass?: string; // for Icon Buttons
  variant?: 'outlined' | 'text' | 'soft' | 'fill';
}
