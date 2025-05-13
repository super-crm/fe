import { type FC } from 'react';
import type { Repository } from '../../../types/repositories.types';
import { useRepositoryRow } from './RepositoryRow.hook';
import { Button, Link, Stack, TableCell, TableRow } from '@mui/material';
import { translate } from '../../../utils/intl';

interface RepositoryProps {
  repository: Repository;
}

const RepositoryRow: FC<RepositoryProps> = ({ repository }) => {
  const { fields, deleteRepository, updateRepository } =
    useRepositoryRow(repository);

  return (
    <TableRow
      key={repository.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {fields.map(field => (
        <TableCell component="th" scope="row" title={field.title} key={field.title} >
          {field.isLink ? (
            <Link href={field.value as string}>{field.value}</Link>
          ) : (
            field.value
          )}
        </TableCell>
      ))}
      <TableCell component="th" scope="row">
        <Button onClick={deleteRepository}>
          {translate('buttons.delete')}
        </Button>
        <Button onClick={updateRepository}>
          {translate('buttons.update')}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RepositoryRow;
