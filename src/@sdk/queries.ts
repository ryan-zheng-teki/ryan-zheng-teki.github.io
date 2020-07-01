import gql from 'graphql-tag';
import { isLoggedIn } from './auth';

export function useUserDetails(): { data: any } {
  if (isLoggedIn()) {
    return { data: null };
  }
  return { data: null };
}

export const getUserDetails = gql`
  query userDetails {
    id
    name
  }
`;
