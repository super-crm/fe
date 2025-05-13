import { type FC } from 'react';
import { useRepositoryForm } from './RepositoryForm.hook';
import { Box, Button, Stack, TextField } from '@mui/material';
import { translate } from '../../utils/intl';

const RepositoryForm: FC = () => {
  const { register, errors, isValid, submitForm } = useRepositoryForm();

  return (
    <Box maxWidth={300}>
      <form onSubmit={submitForm}>
        <Stack spacing={4} direction={'row'}>
          <TextField
            {...register('path')}
            placeholder={translate('fields.path.placeholder')}
            error={!!errors.path}
            helperText={errors.path?.message}
          />
          <Button type="submit" variant="contained" disabled={!isValid}>
            {translate('buttons.add')}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RepositoryForm;
