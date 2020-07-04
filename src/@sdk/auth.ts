import { setContext } from 'apollo-link-context';

export const authEvent = new Event('auth');

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
}

export function setAuthToken(token: string) {
  localStorage.setItem('token', token);
  dispatchEvent(authEvent);
}

export function removeAuthToken() {
  localStorage.removeItem('token');
  dispatchEvent(authEvent);
}

export function clearStorage(): void {
  localStorage.clear();
  dispatchEvent(authEvent);
}

export function isLoggedIn(): boolean {
  return !!getAuthToken();
}

/**
 * request is graphql operation
 * previousContext contains the previous data
 */
export const authLink = setContext((request, { headers }) => {
  const authToken = getAuthToken();
  if (authToken) {
    return {
      headers: {
        ...headers,
        Authorization: authToken ? `Bearer ${authToken}` : null,
      }
    };
  } return {};
});
