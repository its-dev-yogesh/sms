import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { SlashInputInterface } from './interface';
import IconButton from '@/components/Button/IconButton'; // Make sure to import your IconButton component
import { Controller, useFormContext } from 'react-hook-form';
const baseClasses = `form-control w-full max-w-xs block px-3 py-2 mt-1 pr-10 rounded-md outline-none sm:text-sm`;

const variantClasses = {
  outlined: `relative border border-base-100 text-primary-content bg-transparent font-semibold hover:shadow-sm hover:bg-accent focus:bg-accent min-w-full placeholder-gray-600`,
  text: `bg-transparent hover:bg-gray-100 hover:text-neutral placeholder-gray-600`,
  soft: `bg-base-200 text-black bg-opacity-30 hover:bg-opacity-60 border border-transparent hover:border-primary-content font-semibold focus:border-primary-content min-w-full placeholder-gray-600`,
  fill: `bg-primary bg-opacity-60 text-primary-content hover:bg-transparent border border-transparent hover:border-primary-content font-semibold focus:border-primary-content placeholder-gray-600`
};

const sizeClasses = {
  small: 'h-8 min-w-8 text-sm',
  medium: 'h-10 min-w-10 text-base',
  large: 'h-12 min-w-12 text-lg'
};

const disabledClasses =
  'opacity-30 cursor-not-allowed hover:opacity-30 hover:border-transparent';
const enabledClasses = '';

interface SlashInputPasswordFieldProps extends SlashInputInterface {}

export const SlashInputPassword: React.FC<SlashInputPasswordFieldProps> = ({
  name,
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
  placeholder,
  register,
  ...other
}) => {
  const { control, setValue, getValues } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-w-full max-w-xs">
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        disabled={disabled}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              id={name}
              className={cn(
                baseClasses,
                variant && variantClasses[variant],
                size && sizeClasses[size],
                disabled ? disabledClasses : enabledClasses,
                className
              )}
              disabled={disabled}
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              {...field}
              {...other}
            />
            {JSON.stringify(error)}
          </>
        )}
      />

      <div className="absolute top-0 right-0 flex justify-end items-center h-full">
        <IconButton
          showIcon
          showLabel
          onClick={() => setShowPassword(!showPassword)}
          icon={!showPassword ? 'rivet-icons:eye-off' : 'hugeicons:eye'} // Assuming you have eye and eye-off icons
        />
      </div>
    </div>
  );
};
