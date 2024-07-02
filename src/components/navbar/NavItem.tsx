import { Icon, IconifyIcon } from '@iconify/react/dist/iconify.js';
import { HOME_NAV_CONFIG } from './nav.config';
import { useState } from 'react';
import { NavItemInterface } from '@/interfaces/nav.interface';
import IconButton from '../Button/IconButton';
import { Avatar } from '../Avatar';
import { useRouter } from 'next/navigation';
import { Menu, MenuItem, MenuItemInterface, SubMenu } from '../Menu';
interface NavItemProps {
  item: NavItemInterface;
  [key: string]: any;
}
export const NavItem = ({ item, ...props }: NavItemProps) => {
  const router = useRouter();
  switch (item.itemType) {
    case 'ICON_BUTTON':
      return (
        <IconButton
          {...props}
          width={item.width}
          icon={item.icon}
          iconClass={item.iconClass}
          className={item.className}
          buttonLabel={item.label}
          showIcon={item.showIcon}
          showLabel={item.showLabel}
          variant={item.variant}
        />
      );

    case 'FAB':
      return <div {...props}>{item.label}</div>;

    case 'AVATAR':
      return (
        <div {...props}>
          <Avatar />
        </div>
      );

    case 'DROPDOWN':
      return (
        <Menu>
          {item.menuItems && item.menuItems.length > 0 ? (
            <SubMenu key={'level1'} label={item.label} subItemClass="absolute">
              {item.menuItems.map((level1, index1) =>
                level1.subItems && level1.subItems.length ? (
                  <SubMenu
                    key={'level2'}
                    label={level1.label}
                    subItemClass="absolute"
                  >
                    {level1.subItems.map((level2, index2) =>
                      level2.subItems && level2.subItems.length ? (
                        <MenuItem
                          menu={level2}
                          key={level2.id}
                          label={'See More'}
                        />
                      ) : (
                        <MenuItem
                          menu={level2}
                          key={level2.id}
                          label={level2.label}
                        />
                      )
                    )}
                  </SubMenu>
                ) : (
                  <MenuItem
                    menu={level1}
                    key={level1.id}
                    label={level1.label}
                  />
                )
              )}
            </SubMenu>
          ) : (
            <MenuItem
              menu={item as unknown as MenuItemInterface}
              label={item.label}
            />
          )}
        </Menu>
      );
    // case "MENU":
    //   return (
    //     <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
    //       {item.menuItems && item.menuItems.length > 0 ? (
    //         <li>
    //           <details>
    //             <summary>{item.label}</summary>
    //             <ul>
    //               {item.menuItems.map((item, index) =>
    //                 item.subItems && item.subItems.length > 0 ? (
    //                   <li key={index}>
    //                     <details>
    //                       <summary>{item.label}</summary>
    //                       <ul>
    //                         {item.subItems.map((subItem, subIndex) => (
    //                           <li key={subIndex}>
    //                             <a>{subItem.label}</a>
    //                           </li>
    //                         ))}
    //                       </ul>
    //                     </details>
    //                   </li>
    //                 ) : (
    //                   <li>
    //                     <a>{item.label}</a>
    //                   </li>
    //                 )
    //               )}
    //             </ul>
    //           </details>
    //         </li>
    //       ) : (
    //         <li>
    //           <a>{item.label}</a>
    //         </li>
    //       )}
    //     </ul>
    //   );

    // case "POPOVER":
    //   return (
    //     <div className="dropdown dropdown-hover" {...props}>
    //       <div tabIndex={0} role="button" className="btn m-1">
    //         Hover
    //       </div>
    //       {item.menuItems && (
    //         <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    //           {item.menuItems.map((item, index) => (
    //             <li key={index}>
    //               <a>{item.label}</a>
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </div>
    //   );

    case 'TOGGLE':
      return <div {...props}>{item.label}</div>;

    case 'LINK':
      return <div {...props}>{item.label}</div>;

    case 'TEXT':
      return (
        <div
          {...props}
          className="text-neutral m-2 capitalize hover:text-accent-content font-semibold hover:cursor-pointer"
        >
          {item.label}
          {/* <p>Text: {item.label}</p>
          <p>Icon: {item.icon}</p>
          <p>URL: {item.urlTo}</p> */}
        </div>
      );

    case 'LOGO':
      return (
        <div {...props}>
          {item.label}
          {/* <p>Logo: {item.label}</p>
          <p>Icon: {item.icon}</p>
          <p>URL: {item.urlTo}</p> */}
        </div>
      );

    default:
      return null;
  }
};
