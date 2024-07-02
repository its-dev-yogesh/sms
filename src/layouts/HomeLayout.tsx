'use client';
import { DrawerContainer, DrawerItem, DrawerList } from '@/components';
import Fab from '@/components/Button/Fab';
import { DrawerContainerMobile } from '@/components/Drawer/DrawerContainerMobile';
import { NAV_Mobile } from '@/components/Navbar';
import { useDeviceType } from '@/hooks';
import { NavItemInterface } from '@/interfaces';
import Footer from '@/sections/defaults/Footer';
import Header from '@/sections/defaults/Header';
import { closeDrawer, toggleDrawer } from '@/stores';
import { useDrawerState } from '@/stores/selectors/drawer.selector';
import { getUniqueId } from '@/utils';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const drawerState = useDrawerState();
  const handleDrawerState = () => {
    toggleDrawer(!drawerState);
  };
  function handleIconButtonClick(urlTo: string) {
    router.replace(urlTo);
  }
  useEffect(() => {
    closeDrawer();
  }, [router.replace]);

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
      <div key={1} className="flex w-full justify-between">
        <DrawerItem
          item={{
            position: 'START',
            itemType: 'ICON_BUTTON',
            urlTo: '/',
            label: 'Slash',
            showLabel: true,
            showIcon: true,
            icon: 'ph:tidal-logo-duotone',
            width: 20,
            iconClass: 'text-gray-400',
            className: 'bg-none p-1 gap-2 w-1/2',
            id: getUniqueId()
          }}
          onClick={() => router.push('/')}
        />
        <DrawerItem
          item={{
            position: 'START',
            itemType: 'ICON_BUTTON',
            urlTo: '',
            label: 'mobile menu',
            showLabel: false,
            showIcon: true,
            icon: 'mdi:window-close',
            width: 20,
            className: 'bg-none md:hidden',
            iconClass: 'text-neutral',
            id: getUniqueId()
          }}
          onClick={() => handleDrawerState()}
        />
      </div>
    ],
    center: [
      <>
        {NAV_Mobile.filter((item) => item.position === 'CENTER').map(
          (navItem, index) => (
            <DrawerItem
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
        {NAV_Mobile.filter((item) => item.position === 'END').map(
          (navItem, index) => (
            <DrawerItem
              key={index}
              item={navItem}
              onClick={() => onClickHandlers(navItem)}
            />
          )
        )}
      </>
    ]
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />

      {/* Main Content */}
      <div
        className={`flex  flex-1 mt-16 transition-all duration-300 ${
          drawerState ? 'md:ml-64' : 'ml-0'
        }`}
      >
        {/* Main */}
        <main className="flex-1">{children}</main>
      </div>
      {/* Drawer */}

      <DrawerComp>
        <DrawerList navItems={navItems} />
      </DrawerComp>

      {/* Floating Button */}
      <Fab
        onClick={() => router.push('tel:9340236814')}
        icon={'line-md:phone-call-loop'}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

const DrawerComp = ({ children }: { children: ReactNode }) => {
  const deviceType = useDeviceType();
  if (deviceType === 'DESKTOP') {
    return <DrawerContainer>{children}</DrawerContainer>;
  } else {
    return <DrawerContainerMobile>{children}</DrawerContainerMobile>;
  }
};
