import { type FC } from 'react';
import { translate } from '../../utils/intl';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Stack, Typography } from '@mui/material';

const Register: FC = () => {
  return (
    <Stack alignItems={'center'} spacing={2}>
      <Typography variant="h2">{translate('app.routes.register')}</Typography>
      <RegisterForm />
    </Stack>
  );
};

export default Register;
