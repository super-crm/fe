import { type FC } from 'react';
import { translate } from '../../utils/intl';
import { useRepositoriesTable } from './RepositoriesTable.hook';
import RepositoryRow from './RepositoryRow/RepositoryRow';
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const RepositoriesTable: FC = () => {
  const { headers, repositories } = useRepositoriesTable();

  return (
    <Stack>
      {repositories.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableCell key={header.title}>{header.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {repositories.map(repository => (
                <RepositoryRow key={repository.id} repository={repository} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        translate('pages.repositories.empty')
      )}
    </Stack>
  );
};

export default RepositoriesTable;
