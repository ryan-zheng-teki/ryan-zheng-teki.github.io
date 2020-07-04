import { getAuthToken } from '@sdk/auth';
import React from 'react';

export const useAuth = (
  stateChangeCallback?: (authenticated?: boolean) => void
) => {
  const [authenticated, setAuthenticated] = React.useState(!!getAuthToken());
  const eventHandler = () => {
    const newState = !!getAuthToken();

    if (stateChangeCallback && authenticated !== newState) {
      stateChangeCallback(newState);
    }

    setAuthenticated(newState);
  };

  React.useEffect(() => {
    window.addEventListener('auth', eventHandler);

    return () => {
      window.removeEventListener('auth', eventHandler);
    };
  }, [authenticated]);

  return { authenticated };
};
