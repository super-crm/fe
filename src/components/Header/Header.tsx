import { type FC } from 'react';
import { useHeader } from './Header.hook';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { translate } from '../../utils/intl';

const Header: FC = () => {
  const { loggedUser, logout } = useHeader();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {translate('app.name')}
          </Typography>
          {!!loggedUser && (
            <Button color="inherit" onClick={logout}>
              {translate('buttons.logout')}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
