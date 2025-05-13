import { zodResolver } from '@hookform/resolvers/zod';
import {
  repositoryFormSchema,
  type RepositoryFormSchema,
} from './RepositoryForm.schema';
import { useForm } from 'react-hook-form';
import { useRepositoriesState } from '../../store/repositories.state';
import { repositoriesService } from '../../services/repositories.service';
import { translate } from '../../utils/intl';
import type { RestError } from '../../types/common.types';
import { AxiosError } from 'axios';

export const useRepositoryForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<RepositoryFormSchema>({
    mode: 'all',
    resolver: zodResolver(repositoryFormSchema),
  });
  const repositoriesState = useRepositoriesState();

  const onSubmit = async (data: RepositoryFormSchema) => {
    try {
      const repositoryPath = data.path.startsWith('/')
        ? data.path.substring(1)
        : data.path;

      const repository = (
        await repositoriesService.create({ path: repositoryPath })
      ).data;

      repositoriesState.addRepository(repository);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<RestError>;
        setError('path', {
          message: axiosError.response?.data.message,
        });
        return;
      }

      setError('path', {
        message: translate('common.error'),
      });
    }
  };

  const submitForm = handleSubmit(onSubmit);

  return { register, errors, isValid, submitForm };
};
