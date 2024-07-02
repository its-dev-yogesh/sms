import { NavItemInterface } from '@/interfaces/nav.interface';
import { useRouter } from 'next/navigation';
import { Avatar } from '../Avatar';
import IconButton from '../Button/IconButton';
import { Menu, MenuItem, MenuItemInterface } from '../Menu';
import { SubMenuDrawer } from '../Menu/SubMenuDrawer';
interface NavItemProps {
  item: NavItemInterface;
  [key: string]: any;
}
export const DrawerItem = ({ item, ...props }: NavItemProps) => {
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
        <Menu className="bg-transparent text-gray-400 pl-0">
          {item.menuItems && item.menuItems.length > 0 ? (
            <SubMenuDrawer key={'level1'} label={item.label}>
              {item.menuItems.map((level1, index1) =>
                level1.subItems && level1.subItems.length ? (
                  <SubMenuDrawer key={'level2'} label={level1.label}>
                    {level1.subItems.map((level2, index2) =>
                      level2.subItems && level2.subItems.length ? (
                        <MenuItem
                          isSubItem={true}
                          menu={level2}
                          key={level2.id}
                          label={'See More'}
                        />
                      ) : (
                        <MenuItem
                          isSubItem={true}
                          menu={level2}
                          key={level2.id}
                          label={level2.label}
                        />
                      )
                    )}
                  </SubMenuDrawer>
                ) : (
                  <MenuItem
                    isSubItem={true}
                    menu={level1}
                    key={level1.id}
                    label={level1.label}
                  />
                )
              )}
            </SubMenuDrawer>
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
