import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth.service';
import { translate } from '../../utils/intl';
import {
  registerFormSchema,
  type RegisterFormSchema,
} from './RegisterForm.schema';
import { AxiosError } from 'axios';
import type { RestError } from '../../types/common.types';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/app.routes';
import { useState } from 'react';

export const useRegisterForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<RegisterFormSchema>({
    mode: 'all',
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await authService.register(data);
      setIsSuccess(true);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<RestError>;
        setError('email', {
          message: axiosError.response?.data.message,
        });
        return;
      }

      setError('email', {
        message: translate('common.error'),
      });
    }
  };

  const submitForm = handleSubmit(onSubmit);

  return { register, errors, isValid, submitForm, isSuccess };
};
