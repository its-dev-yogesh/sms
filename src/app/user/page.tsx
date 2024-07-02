'use client';
import IconButton from '@/components/Button/IconButton';
import { useMutationLogin } from '@/services';
import { authLogout, useAuthUser } from '@/stores';
import { dateFormatter, isTokenValid } from '@/utils';
import localStorageAvailable from '@/utils/localStorageAvailable';
import { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

export default function Page() {
  const user = useAuthUser();
  const router = useRouter();

  const {
    mutateLogin: mutate,
    isLoginPending: isPending,
    isLoginError: isError,
    LoginErrorDetail: error
  } = useMutationLogin();
  // const [data, setData] = useState<UserData>();
  const handleFetch = () => {
    const coos = { Sd: '' };
    mutate(undefined, {
      // onSuccess: (res) => res != null && setData(res?.data),
    });
  };

  const handleLogout = () => {
    router.push('/');
    authLogout(router);
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>Errorouter: unknownrouter: unknownr: {error && error.message}</span>
    );
  }
  const storageAvailable = localStorageAvailable();
  let token;
  if (storageAvailable) token = localStorage.getItem('token');

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      <IconButton
        onClick={() => handleFetch()}
        buttonLabel="Login"
        variant="soft"
      />
      <IconButton
        onClick={() => handleLogout()}
        buttonLabel="Log out"
        variant="soft"
      />
      <div>{JSON.stringify(user)}</div>
    </ul>
  );
}
