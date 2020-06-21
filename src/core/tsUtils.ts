import { OAuthRequestParams } from './helperTypes';

// typescript is amazing. It contains operations on types. Read the type definition as if we are writing normal code.
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  { [K in Keys]-?: Required<Pick<T, K>> }[Keys];

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export function toQuery(params: OAuthRequestParams, delimiter = '&') {
  const keys = Object.keys(params);

  // Typescript is amazing. It does a lot of type check. Key of get the key from indexible type.
  return keys.reduce((str, key: keyof OAuthRequestParams, index) => {
    let query = `${str}${key}=${params[key]}`;

    if (index < keys.length - 1) {
      query += delimiter;
    }

    return query;
  }, '');
}

export function makeRandomString(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getMiddleContentHeight() {
  const headerHeight =
    document.getElementById('header') &&
    document.getElementById('header').offsetHeight;
  const footerHeight =
    document.getElementById('footer') &&
    document.getElementById('footer').offsetHeight;
  return window.innerHeight - headerHeight - footerHeight;
}
