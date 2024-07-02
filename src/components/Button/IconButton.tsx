import { cn } from '@/utils/cn';
import React, { ButtonHTMLAttributes, useState } from 'react';
import Iconify from '../iconify';
import { ButtonInterface } from './interface';

const baseClasses = `rounded-full focus:outline-none m-0 flex justify-center items-center text-sm h-auto m-1 p-2 w-full`;

const variantClasses = {
  outlined:
    'border border-base-100 hover:bg-gray-100 text-primary-content hover:text-primary font-semibold',
  text: 'bg-transparent hover:bg-gray-100  hover:text-neutral ',
  soft: 'bg-gray-100 hover:bg-gray-200',
  fill: 'bg-primary text-primary-content hover:text-primary hover:bg-transparent border border-transparent hover:border hover:border-primary font-semibold' // New fill variant
};

const sizeClasses = {
  small: 'h-8 min-w-8 text-sm',
  medium: 'h-10 min-w-10 text-base',
  large: 'h-12 min-w-12 text-lg'
};

const disabledClasses = 'opacity-50 cursor-not-allowed hover:bg-transparent';
const enabledClasses = '';
interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonInterface {}

const IconButton: React.FC<IconButtonProps> = ({
  showLabel = true,
  showIcon = false,
  buttonLabel,
  icon,
  width = 25,
  className = '',
  iconClass = '',
  variant,
  size,
  disabled,
  showTooltip,
  tooltipText = '',
  ...other
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className={cn(
          baseClasses,
          variant && variantClasses[variant],
          size && sizeClasses[size],
          disabled ? disabledClasses : enabledClasses,
          className
        )}
        disabled={disabled}
        onMouseEnter={() => showTooltip && setTooltipVisible(true)}
        onMouseLeave={() => showTooltip && setTooltipVisible(false)}
        {...other}
      >
        {showIcon && icon ? (
          <Iconify icon={icon} width={width} className={iconClass} />
        ) : null}
        {showLabel ? <h2>{buttonLabel}</h2> : null}
      </button>
      {showTooltip && isTooltipVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default IconButton;
