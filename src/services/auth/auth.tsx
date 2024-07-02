import { API_CONFIG } from '@/global-configs';
import { authLogin } from '@/stores';
import { useMutation } from '@tanstack/react-query';
import { createUserMutationFunction } from './queryFunctions';

export const useMutationLogin = () => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [API_CONFIG.AUTH.LOGIN._id],
    mutationFn: async () => await authLogin()
  });

  return {
    data,
    mutateLogin: mutate,
    isLoginPending: isPending,
    isLoginError: isError,
    LoginErrorDetail: error
  };
};

export const useMutationCreateUser = () => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [API_CONFIG.USER.CREATE._id],
    mutationFn: () => createUserMutationFunction()
  });
  return {
    data,
    mutateLogin: mutate,
    isLoginPending: isPending,
    isLoginError: isError,
    LoginErrorDetail: error
  };
};
