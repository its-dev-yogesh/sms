import React, { ReactNode } from 'react';

interface NavListProps {
  navItems: { start: ReactNode[]; center: ReactNode[]; end: ReactNode[] };
}

export const NavList: React.FC<NavListProps> = ({ navItems }) => {
  return (
    <>
      <div className="navbar-start sm:gap-1 gap-0 font-bold">
        {navItems.start.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
      <div className="navbar-center md:flex hidden font-bold text-neutral">
        {navItems.center.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
      <div className="navbar-end gap-1">
        {navItems.end.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, { key: index })
            : item
        )}
      </div>
    </>
  );
};
