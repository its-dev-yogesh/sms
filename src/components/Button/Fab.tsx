// components/IconButton.tsx
import { cn } from '@/utils/cn';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Iconify from '../iconify';
import { ButtonInterface } from './interface';

interface FloatButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonInterface {}

const Fab: React.FC<FloatButtonProps> = ({
  icon,
  width = 25,
  className = '',
  iconClass = '',
  ...other
}) => {
  return (
    <button
      className={cn(
        'flex justify-center items-center z-30 fixed bottom-5 left-5  h-10 w-10 p-2 text-white rounded-full transition-all duration-300 bg-primary shadow-xl border border-white',
        className
      )}
      {...other}
    >
      <Iconify icon={icon} width={width} className={iconClass} />
    </button>
  );
};

export default Fab;
