'use client';

import { useDeviceType } from '@/hooks';
import { DeviceTypeInterface } from '@/interfaces';
import HomeLayout from '@/layouts/HomeLayout';
import Feature1 from '@/sections/home/Feature1';
import HeroSection from '@/sections/home/HeroSection';
import { useAuthState } from '@/stores';
import { themes } from '@/theme/theme.config';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface pageProps {}

export default function Page() {
  const isAuthenticated = useAuthState();
  const device = useDeviceType();

  const colors = [
    { name: 'primary', value: 'bg-primary', content: 'primary-content' },
    { name: 'secondary', value: 'bg-secondary', content: 'secondary-content' },
    { name: 'accent', value: 'bg-accent', content: 'accent-content' },
    { name: 'neutral', value: 'bg-neutral', content: 'neutral-content' },
    { name: 'base-100', value: 'bg-base-100', content: 'base-content' },
    { name: 'base-200', value: 'bg-base-200', content: 'base-content' },
    { name: 'base-300', value: 'bg-base-300', content: 'base-content' },
    { name: 'info', value: 'bg-info', content: 'info-content' },
    { name: 'success', value: 'bg-success', content: 'success-content' },
    { name: 'warning', value: 'bg-warning', content: 'warning-content' },
    { name: 'error', value: 'bg-error', content: 'error-content' }
  ];

  const ColorBox = ({
    colorName,
    colorValue,
    contentColor
  }: {
    colorName: string;
    colorValue: string;
    contentColor: string;
  }) => (
    <div className={`${colorValue} text-${contentColor} p-4 my-2 rounded-md`}>
      {colorName}: #{colorValue}
    </div>
  );
  if (isAuthenticated)
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        {Object.keys(themes).map((key, index) => (
          <div
            key={index}
            className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border mb-10 p-2 bg-base-100"
            data-theme={key}
          >
            <div>{key}</div>

            {colors.map((color, index) => (
              <ColorBox
                key={index}
                colorName={color.name}
                colorValue={color.value}
                contentColor={color.content}
              />
            ))}
          </div>
        ))}
      </div>
    );
  else
    return (
      <HomeLayout>
        <HeroSection />
        <Feature1 />
      </HomeLayout>
    );
}
