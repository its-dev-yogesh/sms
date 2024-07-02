import { DeviceTypeInterface } from '@/interfaces';
import { useCreateStore } from '../store';
export const toggleDeviceType = (deviceType: DeviceTypeInterface) =>
  useCreateStore.setState((state: { deviceType: DeviceTypeInterface }) => ({
    deviceType: deviceType
  }));
