import { useMemo } from 'react';

import { APP_ROUTES } from '../../constants/app.routes';
import { APP_ROUTES_PARAMS } from '../../constants/app.routes.params';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserState } from '../../store/user.state';

export function withRedirect<T>(Component: any) {
  return function WrappedComponent(props: T) {
    const location = useLocation();
    const userState = useUserState();

    const currentPath = useMemo(() => {
      return APP_ROUTES_PARAMS.find(route => route.path === location.pathname);
    }, [location.pathname]);

    if (!currentPath || (currentPath.isPrivate && !userState.loggedUser)) {
      return <Navigate to={APP_ROUTES.home} replace />;
    }

    return <Component {...props} />;
  };
}
