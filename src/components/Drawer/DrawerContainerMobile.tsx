'use client';

import { closeDrawer } from '@/stores';
import { useDrawerState } from '@/stores/selectors/drawer.selector';
import { cn } from '@/utils/cn';
import { ReactNode, useEffect, useRef } from 'react';

interface DrawerContainerMobileProps {
  children: ReactNode;
}

export const DrawerContainerMobile: React.FC<DrawerContainerMobileProps> = ({
  children
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerState = useDrawerState();

  const handleClickOutside = async (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      closeDrawer();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <aside
      ref={drawerRef}
      className={cn(
        `fixed h-screen overflow-scroll flex justify-start gap-2 md:top-16 top-0 left-0 bg-gray-800 text-white md:w-64 w-[70%] transform transition-transform duration-300 ease-in-out z-30`,
        drawerState ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="p-4 w-full">{children}</div>
    </aside>
  );
};
