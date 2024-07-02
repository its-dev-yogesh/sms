// selectors.ts
import { useCreateStore } from '../store';

const selectDrawer = (state: { isOpen: boolean }) => state.isOpen;

export const useDrawerState = () => {
  return useCreateStore(selectDrawer);
};
