import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, type LoginFormSchema } from './LoginForm.schema';
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth.service';
import { useUserState } from '../../store/user.state';
import { translate } from '../../utils/intl';

export const useLoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<LoginFormSchema>({
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
  });
  const userState = useUserState();

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      const user = (await authService.login(data)).data;
      userState.setLoggedUser(user);
    } catch (error) {
      console.log(error)
      setError('email', {
        message: translate('fields.password.errors.unauthorized'),
      });
    }
  };

  const submitForm = handleSubmit(onSubmit);

  return { register, errors, isValid, submitForm };
};
