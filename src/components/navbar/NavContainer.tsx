'use client';
import { ReactNode } from 'react';

interface NavContainerProps {
  children: ReactNode;
}

export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <div className="navbar container-main text-black max-h-16">{children}</div>
  );
};
