import { DeviceTypeInterface } from '@/interfaces';

export const createDeviceTypeSlice = (): {
  deviceType: DeviceTypeInterface;
} => ({
  deviceType: 'DESKTOP'
});
