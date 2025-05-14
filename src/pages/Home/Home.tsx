import { type FC } from 'react';
import { translate } from '../../utils/intl';
import Login from '../../components/LoginForm/LoginForm';
import { useHome } from './Home.hook';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/app.routes';
import { Button, Stack, Typography } from '@mui/material';

const Home: FC = () => {
  const { loggedUser } = useHome();
  if (loggedUser) {
    return (
      <Stack spacing={4} padding={4}>
        <Typography variant="h3">
          {translate('pages.home.hi', { name: loggedUser.firstName })}
        </Typography>
        <Link to={APP_ROUTES.repositories}>
          {translate('pages.home.repositories')}
        </Link>
      </Stack>
    );
  }

  return (
    <Stack alignItems={'center'} spacing={2}>
      <Typography variant="h2">{translate('app.routes.home')}</Typography>
      <Login />
      <Link to={APP_ROUTES.register}>{translate('pages.home.register')}</Link>
    </Stack>
  );
};

export default Home;
