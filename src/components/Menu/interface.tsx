export interface MenuItemInterface {
  type: 'LINK' | 'ICON_BUTTON' | 'SUB-MENU';
  label: string;
  urlTo: string;
  icon: string;
  subItems: MenuItemInterface[];
  isSubItem?: boolean;
  id: string | number;
}
