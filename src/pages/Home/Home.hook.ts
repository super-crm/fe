import { useUserState } from '../../store/user.state';

export const useHome = () => {
  const userState = useUserState();
  const loggedUser = userState.loggedUser;
  return { loggedUser };
};
