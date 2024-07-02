import { create } from 'zustand';
import { createDrawerSlice } from './slices/drawer.slice';
import { StoreInterface } from '@/interfaces';
import { createAuthSlice, createDeviceTypeSlice } from './slices';
import { persist } from 'zustand/middleware';

export const useCreateStore = create<StoreInterface>()(
  persist(
    () => ({
      ...createDrawerSlice(),
      ...createAuthSlice(),
      ...createDeviceTypeSlice()
    }),
    { name: 'persist-data' }
  )
);
