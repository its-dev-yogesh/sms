'use client';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { SlashInputInterface } from './interface';
import {
  Controller,
  RegisterOptions,
  UseFormRegisterReturn,
  useFormContext
} from 'react-hook-form';

const baseClasses = `form-control w-full max-w-xs block px-3 py-2 mt-1 rounded-md outline-none sm:text-sm`;

const variantClasses = {
  outlined: `border border-base-100 text-primary-content bg-transparent font-semibold hover:shadow-sm hover:bg-accent focus:bg-accent min-w-full placeholder-gray-600`,
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

interface SlashInputFieldProps extends SlashInputInterface {}

export const SlashInputText: React.FC<SlashInputFieldProps> = ({
  showLabel = true,
  name,
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
  return (
    control != null && (
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
              {...field}
              {...other}
            />
            {JSON.stringify(error)}
          </>
        )}
      />
    )
  );
};
