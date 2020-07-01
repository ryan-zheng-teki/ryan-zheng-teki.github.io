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

/* The following code is actually quite interesting, it contains
a lot of syntactics stuff
*/
const setAuthorizationLink = setContext((request, previousContext) => {
  const authToken = getAuthToken();
  if (authToken) {
    return {
      ...previousContext,
      headers: {
        ...previousContext.headers,
        Authorization: authToken ? `JWT ${authToken}` : null,
      },
    };
  }

  return previousContext;
});
