'use client';
import { DEVICE_TYPES } from '@/global-configs/responsive.config';
import { DeviceTypeInterface } from '@/interfaces';
import {
  closeDrawer,
  openDrawer,
  toggleDeviceType,
  useSelectDeviceType
} from '@/stores';
import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

export const MOBILE_WIDTH = 480;
export const TABLET_WIDTH = 768;
export const DESKTOP_WIDTH = 1024;

export function useDeviceType(): DeviceTypeInterface {
  const { width } = useWindowSize();
  const currentDevice = useSelectDeviceType();
  const handleDeviceChanged = (Updated_width: number) => {
    if (Updated_width && Updated_width <= MOBILE_WIDTH) {
      return 'MOBILE';
    } else if (
      Updated_width &&
      Updated_width <= TABLET_WIDTH &&
      Updated_width > MOBILE_WIDTH
    ) {
      return 'TABLET';
    } else if (Updated_width && Updated_width > TABLET_WIDTH) {
      return 'DESKTOP';
    }
  };
  useEffect(() => {
    if (width) {
      closeDrawer();
      const newDevice = handleDeviceChanged(width);
      if (newDevice) toggleDeviceType(newDevice);
    }
  }, [width]);

  return currentDevice;
}
