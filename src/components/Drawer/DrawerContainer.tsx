"use client";

import { useDrawerState } from "@/stores/selectors/drawer.selector";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface DrawerContainerProps {
  children: ReactNode;
}

export const DrawerContainer: React.FC<DrawerContainerProps> = ({
  children,
}) => {
  const drawerState = useDrawerState();

  return (
    <aside
      className={cn(
        `fixed h-screen overflow-scroll flex justify-start gap-2 top-0 left-0 bg-gray-800 text-white md:w-64 w-[70%] transform transition-transform duration-300 ease-in-out z-30`,
        drawerState ? "translate-x-0" : "-translate-x-full"
      )}>
      <div className="p-4 w-full">{children}</div>
    </aside>
  );
};
