import Link from 'next/link';
import Iconify from '../iconify';
import { MenuItemInterface } from './interface';
import { cn } from '@/utils/cn';

interface MenuItemProps {
  label: string;
  isSubItem?: boolean;
  menu: MenuItemInterface;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  menu,
  isSubItem
}) => {
  return (
    <li
      className={cn(
        'flex flex-row justify-start items-center gap-2  w-full m-0 '
      )}
    >
      <Link
        href={menu?.urlTo}
        style={{ textDecoration: 'none' }}
        className={cn(
          'text-pretty w-full text-primary-content hover:text-primary-content text-sm text-bold rounded-r-md hover:bg-primary p-2 active:bg-secondary',
          { ' text-xs': isSubItem }
        )}
      >
        {/* {isSubItem && (
          <Iconify
            width={25}
            icon={"radix-icons:dot-filled"}
            className="p-0 m-0"
          />
        )} */}
        {label}
      </Link>
    </li>
  );
};
