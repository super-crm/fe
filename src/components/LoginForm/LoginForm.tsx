import { type FC } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

import { translate } from '../../utils/intl';
import { useLoginForm } from './LoginForm.hook';

const LoginForm: FC = () => {
  const { register, errors, isValid, submitForm } = useLoginForm();

  return (
    <Box width={400}>
      <form onSubmit={submitForm}>
        <Stack spacing={4}>
          <TextField
            {...register('email')}
            placeholder={translate('fields.email.placeholder')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password')}
            placeholder={translate('fields.password.placeholder')}
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" disabled={!isValid}>
            {translate('buttons.login')}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
