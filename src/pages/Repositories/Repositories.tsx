import { type FC } from 'react';
import { translate } from '../../utils/intl';
import RepositoryForm from '../../components/RepositoryForm/RepositoryForm';
import RepositoriesTable from '../../components/RepositoriesTable/RepositoriesTable';
import { Stack, Typography } from '@mui/material';

const Repositories: FC = () => {
  return (
    <Stack spacing={4} padding={4}>
      <Typography variant="h2">
        {translate('app.routes.repositories')}
      </Typography>
      <RepositoryForm />
      <RepositoriesTable />
    </Stack>
  );
};

export default Repositories;
