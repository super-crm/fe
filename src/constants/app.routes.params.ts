import { translate } from '../utils/intl';
import { APP_ROUTES } from './app.routes';

export const APP_ROUTES_PARAMS = [
  {
    path: APP_ROUTES.home,
    name: translate('app.routes.home'),
    isPrivate: false,
  },
  {
    path: APP_ROUTES.register,
    name: translate('app.routes.register'),
    isPrivate: false,
  },
  {
    path: APP_ROUTES.repositories,
    name: translate('app.routes.repositories'),
    isPrivate: true,
  },
];
