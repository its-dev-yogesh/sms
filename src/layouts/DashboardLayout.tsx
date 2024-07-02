'use client';
import { DrawerContainer, DrawerItem, DrawerList } from '@/components';
import Fab from '@/components/Button/Fab';
import { DrawerContainerMobile } from '@/components/Drawer/DrawerContainerMobile';
import { NAV_Mobile } from '@/components/Navbar';
import { useDeviceType } from '@/hooks';
import { NavItemInterface } from '@/interfaces';
import Footer from '@/sections/defaults/Footer';
import Header from '@/sections/defaults/Header';
import { toggleDrawer, useAuthState } from '@/stores';
import { useDrawerState } from '@/stores/selectors/drawer.selector';
import { getUniqueId } from '@/utils';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = useAuthState();
  const drawerState = useDrawerState();
  const handleDrawerState = () => {
    toggleDrawer(!drawerState);
  };
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
      <div key={2} className="flex w-full justify-between">
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
    <div className=" flex flex-col h-screen">
      <Header />
      {/* Main */}
      <main className="flex-1 p-4">
        {/* Main Content */}
        <div
          className={`flex flex-1 mt-16 transition-all duration-300 ${
            drawerState && isAuthenticated ? 'md:ml-64' : 'ml-0'
          }`}
        >
          {children}
        </div>
      </main>

      {/* Drawer */}

      <DrawerComp>
        <DrawerList navItems={navItems} />
      </DrawerComp>

      {/* Floating Button */}
      <Fab
        onClick={() => handleDrawerState()}
        icon={
          drawerState
            ? 'fluent:arrow-left-16-regular'
            : 'fluent:arrow-right-16-regular'
        }
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
