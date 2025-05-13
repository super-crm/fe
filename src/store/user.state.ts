import { proxy, useSnapshot } from 'valtio';
import { type User } from '../types/user.types';
import { persist } from 'valtio-persist';

export interface UserState {
  loggedUser: User | null;
}

export const { store: userState, clear } = await persist<UserState>(
  {
    loggedUser: null,
  },
  'userState'
);

const setLoggedUser = (user: User | null) => {
  userState.loggedUser = user;
};

export const logout = () => {
  clear();
};

export const userActions = {
  setLoggedUser,
};

export const useUserState = () => {
  const userStateSnap = useSnapshot(userState);

  return {
    loggedUser: userStateSnap.loggedUser,
    ...userActions,
  };
};
