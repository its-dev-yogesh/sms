// selectors.ts
import { StoreInterface } from '@/interfaces';
import { useCreateStore } from '../store';

const selectAuthState = (state: StoreInterface) => state.isAuthenticated;

export const useAuthState = () => {
  return useCreateStore(selectAuthState);
};

const selectAuthUser = (state: StoreInterface) => state.userData;

export const useAuthUser = () => {
  return useCreateStore(selectAuthUser);
};
