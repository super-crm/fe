import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { type FC } from 'react';
import { translate } from '../../utils/intl';
import { useRegisterForm } from './RegisterForm.hook';
import { Link, redirect } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/app.routes';

const RegisterForm: FC = () => {
  const { register, errors, isValid, submitForm, isSuccess } =
    useRegisterForm();

  return (
    <Box width={400}>
      {isSuccess ? (
        <Stack spacing={2}>
          <Typography>{translate('pages.register.success')}</Typography>
          <Link to={APP_ROUTES.home}>
            {translate('pages.register.success.link')}
          </Link>
        </Stack>
      ) : (
        <form onSubmit={submitForm}>
          <Stack spacing={4}>
            <TextField
              {...register('email')}
              placeholder={translate('fields.email.placeholder')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('firstName')}
              placeholder={translate('fields.firstName.placeholder')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              {...register('lastName')}
              placeholder={translate('fields.lastName.placeholder')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <TextField
              {...register('password')}
              placeholder={translate('fields.password.placeholder')}
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              {...register('passwordConfirmation')}
              placeholder={translate('fields.passwordConfirmation.placeholder')}
              type="password"
              error={!!errors.passwordConfirmation}
              helperText={errors.passwordConfirmation?.message}
            />
            <Button type="submit" variant="contained" disabled={!isValid}>
              {translate('buttons.register')}
            </Button>
          </Stack>
        </form>
      )}
    </Box>
  );
};

export default RegisterForm;
