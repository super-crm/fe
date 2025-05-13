import { authService } from '../../services/auth.service';
import { useUserState } from '../../store/user.state';

export const useHeader = () => {
  const userState = useUserState();
  const loggedUser = userState.loggedUser;

  const logout = async () => {
    await authService.logout();
    userState.setLoggedUser(null);
  };

  return { loggedUser, logout };
};
