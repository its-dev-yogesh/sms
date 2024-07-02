import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ children, className }) => {
  return (
    <ul
      className={cn(
        'menu lg:menu-horizontal bg-base-200 rounded-box list-disc',
        className
      )}
    >
      {children}
    </ul>
  );
};
