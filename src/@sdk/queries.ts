/* eslint-disable @typescript-eslint/indent */
import { useApolloClient } from '@apollo/react-hooks';
import { ApolloQueryResult, ObservableQuery } from 'apollo-client';
import { isEqual } from 'apollo-utilities/lib/util/isEqual';
import { UserDetails } from 'Generated/UserDetails';
import gql from 'graphql-tag';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from './helpers/helper';

export function useUserDetails(): {data: UserDetails, error:any, loading: boolean} {
  const client = useApolloClient();
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: true,
  });
  const didMountRef = useRef(false);
  const prevDataRef = useRef(null);
  const prevUnsubRef = useRef(null);

  /* useAuth will register an auth event listener. This event will get 
  called when we login from the Github.This design is excellent. Previously 
  After getting the token. I don't know how to get the user information.The GetUserInfo
  is a normal graphql query which i can not put into the Login button.I could do the login
  in the Github button, and fetch the userinformation here. 
  */
  const { authenticated } = useAuth();
  const setData = useCallback(({ data, error, loading }) => {
    if (!isEqual(data, prevDataRef.current)) {
      prevDataRef.current = data;
      setResult({ data, loading: false, error: null });
    } else {
      /* What's the point of this.When current and results are the same
      then there should be no change
      */
      setResult((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  /*
  memo in react will get called first.
  */
  const { unsubscribe } = useMemo(() => {
    if(authenticated) {
      const observable: ObservableQuery<
      UserDetails,
      { [key: string]: any }
    > = client.watchQuery({ query: getUserDetails });
      const subscription = observable.subscribe(
        (queryResult: ApolloQueryResult<any>) => {
          const { data, errors: apolloErrors } = queryResult;
          if (apolloErrors) {
            setData(null);
          } else {
            setData({ data, loading: false, error: null });
          }
        }
      );
      return { unsubscribe: subscription.unsubscribe.bind(subscription) };
    } 
    return { unsubscribe: null };
  }, [authenticated]);

  useEffect(() => {
    /* Effects are only called when authenticated value is changed.Initially
    authenticated value is false. This effect will get called.And the effect return a callback(why)
    */
    if (prevUnsubRef.current) {
      prevUnsubRef.current();
    }
    prevUnsubRef.current = unsubscribe;
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [authenticated]);

  return result;
}

export type QueryShape = (...args: any) => any;

export const getUserDetails = gql`
  query UserDetails {
    userDetails {
      id
      name
      avatarUrl
    }
  }
`;
