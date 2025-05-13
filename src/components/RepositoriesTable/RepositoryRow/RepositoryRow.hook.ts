import { repositoriesService } from '../../../services/repositories.service';
import { useRepositoriesState } from '../../../store/repositories.state';
import type { Repository } from '../../../types/repositories.types';
import { translate } from '../../../utils/intl';

export const useRepositoryRow = (repository: Repository) => {
  const { name, owner, url, dateOfCreation, forks, stars, issues } = repository;
  const repositoriesState = useRepositoriesState();

  const dateOfCreationUnix = Math.floor(
    new Date(dateOfCreation).getTime() / 1000
  );

  const fields = [
    {
      title: translate('pages.repositories.repository.name'),
      value: name,
      isLink: false,
    },
    {
      title: translate('pages.repositories.repository.owner'),
      value: owner,
      isLink: false,
    },
    {
      title: translate('pages.repositories.repository.url'),
      value: url,
      isLink: true,
    },
    {
      title: translate('pages.repositories.repository.dateOfCreation'),
      value: dateOfCreationUnix,
      isLink: false,
    },
    {
      title: translate('pages.repositories.repository.forks'),
      value: forks,
      isLink: false,
    },
    {
      title: translate('pages.repositories.repository.stars'),
      value: stars,
      isLink: false,
    },
    {
      title: translate('pages.repositories.repository.issues'),
      value: issues,
      isLink: false,
    },
  ];

  const deleteRepository = async () => {
    try {
      await repositoriesService.delete(repository.id);
      repositoriesState.deleteRepository(repository.id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRepository = async () => {
    try {
      const updatedRepository = (await repositoriesService.update(repository.id)).data;
      repositoriesState.updateRepository(repository.id, updatedRepository);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fields,
    deleteRepository,
    updateRepository,
  };
};
