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
