import { useEffect } from 'react';
import { useRepositoriesState } from '../../store/repositories.state';
import { repositoriesService } from '../../services/repositories.service';
import { translate } from '../../utils/intl';

export const useRepositoriesTable = () => {
  const repositoriesState = useRepositoriesState();

  const getRepositories = async () => {
    try {
      const repositories = (await repositoriesService.getAll()).data;
      repositoriesState.setRepositories(repositories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepositories();
  }, []);

  const headers = [
    {
      title: translate('pages.repositories.repository.name'),
    },
    {
      title: translate('pages.repositories.repository.owner'),
    },
    {
      title: translate('pages.repositories.repository.url'),
    },
    {
      title: translate('pages.repositories.repository.dateOfCreation'),
    },
    {
      title: translate('pages.repositories.repository.forks'),
    },
    {
      title: translate('pages.repositories.repository.stars'),
    },
    {
      title: translate('pages.repositories.repository.issues'),
    },
  ];

  return {
    headers,
    repositories: repositoriesState.repositories,
  };
};
