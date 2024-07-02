// selectors.ts
import { DeviceTypeInterface } from '@/interfaces';
import { useCreateStore } from '../store';

const selectDeviceType = (state: { deviceType: DeviceTypeInterface }) =>
  state.deviceType;

export const useSelectDeviceType = () => {
  return useCreateStore(selectDeviceType);
};
