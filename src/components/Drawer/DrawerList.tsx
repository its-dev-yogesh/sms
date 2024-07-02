import React, { ReactNode } from 'react';

interface NavListProps {
  navItems: { start: ReactNode[]; center: ReactNode[]; end: ReactNode[] };
}

export const DrawerList: React.FC<NavListProps> = ({ navItems }) => {
  return (
    <>
      <div className="flex flex-col sm:gap-1 gap-0 font-bold w-full">
        {navItems.start.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
      <div className="flex flex-col font-bold text-neutral">
        {navItems.center.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
      <div className="flex flex-col gap-1">
        {navItems.end.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
    </>
  );
};
