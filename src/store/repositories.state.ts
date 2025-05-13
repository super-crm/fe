import { proxy, useSnapshot } from 'valtio';
import type { Repository } from '../types/repositories.types';

export interface RepositoriesState {
  repositories: Repository[];
}

export const repositoriesState = proxy<RepositoriesState>({
  repositories: [],
});

const setRepositories = (repositories: Repository[]) => {
  repositoriesState.repositories = repositories;
};

const addRepository = (repository: Repository) => {
  repositoriesState.repositories.push(repository);
};

const deleteRepository = (repositoryId: string) => {
  repositoriesState.repositories.splice(
    repositoriesState.repositories.findIndex(({ id }) => id === repositoryId),
    1
  );
};

const updateRepository = (
  repositoryId: string,
  updatedRepository: Repository
) => {
  repositoriesState.repositories.splice(
    repositoriesState.repositories.findIndex(({ id }) => id === repositoryId),
    1,
    updatedRepository
  );
};

export const repositoriesActions = {
  setRepositories,
  addRepository,
  deleteRepository,
  updateRepository,
};

export const useRepositoriesState = () => {
  const repositoryStateSnap = useSnapshot(repositoriesState);

  return {
    repositories: repositoryStateSnap.repositories,
    ...repositoriesActions,
  };
};
