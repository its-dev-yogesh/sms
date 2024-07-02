import { API_CONFIG } from '@/global-configs';
import { BASE_URL } from '@/utils';
import { LoginResponse } from './interface';

export const loginMutationFunction = async () => {
  const response = await BASE_URL.post<LoginResponse>(
    API_CONFIG.AUTH.LOGIN.path,
    {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30 // optional, defaults to 60
    }
  );

  if (response) return response;
};

export const getPhotoUseQueryFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');

  if (response) return response;
};
