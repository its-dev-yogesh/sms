import { UserData } from '@/interfaces';
import { loginMutationFunction } from '@/services/auth/queryFunctions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useCreateStore } from '../store';
import localStorageAvailable from '@/utils/localStorageAvailable';
import { getValidAccessToken } from '@/utils/jwt';
export const toggleAuth = (isAuthenticated: boolean) =>
  useCreateStore.setState(() => ({
    isAuthenticated: isAuthenticated
  }));

export const authLogin = async () => {
  const storageAvailable = localStorageAvailable();
  try {
    const authResponse = await loginMutationFunction();
    useCreateStore.setState(() => ({
      isAuthenticated: true,
      userData: authResponse?.data as unknown as UserData
    }));

    if (authResponse?.status === 200) {
      useCreateStore.setState(() => ({
        isAuthenticated: true,
        userData: authResponse?.data as unknown as UserData
      }));
      console.log(authResponse?.data?.token);
      if (storageAvailable && authResponse?.data?.token) {
        localStorage.setItem('token', authResponse?.data?.token as string);
      }

      return authResponse?.data;
    } else {
      throw new Error(authResponse?.data?.message);
    }
  } catch (error) {
    throw error;
  }
};

export const authLogout = (router: AppRouterInstance) => {
  router.replace('/');
  useCreateStore.setState(() => ({
    isAuthenticated: false,
    userData: null
  }));
};

export const authInitiate = async () => {
  try {
    useCreateStore.setState(() => ({
      isAuthPending: true
    }));
    const accessToken = await getValidAccessToken();
    const user = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (accessToken && user) {
      useCreateStore.setState(() => ({
        isAuthenticated: true,
        isAuthPending: false,
        userData: user as unknown as UserData
      }));

      if (localStorageAvailable()) {
        localStorage.setItem('token', user?.token as string);
      }

      return user;
    } else {
      throw new Error(user?.message);
    }
  } catch (error) {
    throw error;
  }
};
