import { AuthInterface } from './auth.interface';
import { DeviceTypeInterface } from './deviceTypeInterface';
import { DrawerIterface } from './store.interface';

export * from './store.interface';
export * from './auth.interface';
export * from './nav.interface';
export * from './deviceTypeInterface';
export * from './user.interface';
export type StoreInterface = DrawerIterface &
  AuthInterface & { deviceType: DeviceTypeInterface };
