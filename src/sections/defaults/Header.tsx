'use client';
import IconButton from '@/components/Button/IconButton';
import { NAV_DEMO, NavList } from '@/components/Navbar';
import { NavContainer } from '@/components/Navbar/NavContainer';
import { NavItem } from '@/components/Navbar/NavItem';
import { NavItemInterface, actionItemTypes } from '@/interfaces/nav.interface';
import { toggleAuth, toggleDrawer, useAuthState } from '@/stores';
import { useDrawerState } from '@/stores/selectors/drawer.selector';
import { getUniqueId } from '@/utils';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const isAuthenticated = useAuthState();
  const drawerState = useDrawerState();
  const handleDrawerState = () => {
    toggleDrawer(!drawerState);
  };
  const handleAuthState = () => {
    toggleAuth(!isAuthenticated);
  };
  // const navItems = {
  //   start: [
  //     <>
  //       <IconButton
  //         width={"80%"}
  //         icon={"ph:tidal-logo-duotone"}
  //         iconClass="text-neutral"
  //         className="bg-none p-1"
  //       />
  //       Slash
  //     </>,
  //   ],
  //   center: [
  //     <>
  //       <ul className="menu menu-horizontal px-1">
  //         <li>
  //           <a>Item 1</a>
  //         </li>
  //         <li>
  //           <details>
  //             <summary>Parent</summary>
  //             <ul className="p-2">
  //               <li>
  //                 <a>Submenu 1</a>
  //               </li>
  //               <li>
  //                 <a>Submenu 2</a>
  //               </li>
  //             </ul>
  //           </details>
  //         </li>
  //         <li>
  //           <a>Item 3</a>
  //         </li>
  //       </ul>
  //     </>,
  //   ],
  //   end: [
  //     <>
  //       <IconButton
  //         width={"80%"}
  //         icon={"mdi:notifications-none"}
  //         iconClass="text-neutral"
  //         className="bg-none p-1"
  //       />

  //       {/* lg Profile Icon */}

  //       <IconButton
  //         width={"80%"}
  //         onClick={() => handleAuthState()}
  //         icon={"mdi:user-circle"}
  //         iconClass="text-neutral"
  //         className="bg-none lg:flex hidden"
  //       />

  //       {/* Mobile Drawer Button */}
  //       <IconButton
  //         width={"80%"}
  //         onClick={() => handleDrawerState()}
  //         icon={drawerState ? "mdi:menu-open" : "mdi:menu-close"}
  //         iconClass="text-neutral"
  //         className="bg-none md:hidden"
  //       />
  //     </>,
  //   ],
  // };

  function handleIconButtonClick(urlTo: string) {
    router.push(urlTo);
  }

  const onClickHandlers = (navItem: NavItemInterface) => {
    switch (navItem.itemType) {
      case 'ICON_BUTTON':
        handleIconButtonClick(navItem.urlTo);
        break;
      case 'DROPDOWN':
        () => {};
        break;
      case 'LINK':
        handleIconButtonClick(navItem.urlTo);
        break;
      case 'TEXT':
        handleIconButtonClick(navItem.urlTo);
        break;
      default:
        () => {};
    }
  };

  const navItems = {
    start: [
      <>
        {NAV_DEMO.filter((item) => item.position === 'START').map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
      </>
    ],
    center: [
      <>
        {NAV_DEMO.filter((item) => item.position === 'CENTER').map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
      </>
    ],
    end: [
      <>
        {NAV_DEMO.filter((item) => item.position === 'END').map(
          (navItem, index) => (
            <NavItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
        {!drawerState && (
          <NavItem
            item={{
              position: 'END',
              itemType: 'ICON_BUTTON',
              urlTo: '',
              label: 'mobile menu',
              showLabel: false,
              showIcon: true,
              icon: drawerState ? 'mdi:menu-open' : 'mdi:menu-close',
              width: '80%',
              className: 'bg-none md:hidden',
              iconClass: 'text-neutral',
              id: getUniqueId()
            }}
            onClick={() => handleDrawerState()}
          />
        )}
      </>
    ]
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full z-10 backdrop-blur-md bg-base-200">
        <NavContainer>
          <NavList navItems={navItems} />
        </NavContainer>
      </header>
    </>
  );
}
