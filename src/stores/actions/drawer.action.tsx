import { useCreateStore } from '../store';
export const toggleDrawer = (isOpen: boolean) =>
  useCreateStore.setState((state: { isOpen: boolean }) => ({
    isOpen: isOpen
  }));

export const openDrawer = () =>
  useCreateStore.setState((state: { isOpen: boolean }) => ({
    isOpen: true
  }));
export const closeDrawer = () =>
  useCreateStore.setState((state: { isOpen: boolean }) => ({
    isOpen: false
  }));
