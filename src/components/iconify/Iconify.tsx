import { FC } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

interface IconifyProps {
  icon: IconifyIcon | string;
  width?: number | string;
  className?: string;
  [key: string]: any; // Allows other props like className, style, etc.
}

const Iconify: FC<IconifyProps> = ({
  icon,
  width = 20,
  className,
  ...other
}) => (
  <Icon
    icon={icon}
    className={className}
    width={width}
    height={width}
    {...other}
  />
);

export default Iconify;
