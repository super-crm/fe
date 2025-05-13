const repositoriesPathsRoot = 'repositories';
const authPathsRoot = 'auth';

const repositories = {
  getAll: repositoriesPathsRoot,
  getOne: (id: string): string => `${repositoriesPathsRoot}/${id}`,
  post: repositoriesPathsRoot,
  patch: (id: string): string => `${repositoriesPathsRoot}/${id}`,
  delete: (id: string): string => `${repositoriesPathsRoot}/${id}`,
};

const auth = {
  login: `${authPathsRoot}/login`,
  logout: `${authPathsRoot}/logout`,
  register: `${authPathsRoot}/register`,
  refresh: `${authPathsRoot}/refresh`,
};

export const API_PATHS = {
  repositories,
  auth,
};
