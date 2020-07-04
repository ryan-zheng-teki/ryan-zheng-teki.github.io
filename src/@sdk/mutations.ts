import { useApolloClient } from '@apollo/react-hooks';
import { TokenAuth, TokenAuthVariables } from 'Generated/TokenAuth';
import gql from 'graphql-tag';
import { useCallback } from 'react';
import { setAuthToken } from './auth';



/**
 * We should also consider to add options parameters. Option parameters 
 * is interacting with the cache or other constructs
 * @param variables the mutation input parameter 
 */
export function useSignIn(): any {
  const apolloClient = useApolloClient();

  const runMutation = useCallback( async (variables: TokenAuthVariables) => {
    // the variables are sent from upper logic
    try {
      const queryResult = await apolloClient.mutate<TokenAuth, TokenAuthVariables>({ mutation:tokenAuthMutation, variables });
      if(queryResult.errors) {
        // how to handle errors.     
      } else {
        setAuthToken(queryResult.data.createToken.jwtToken);
      }
    } catch(err) {
      // figure out how to handle errors in React
      console.log('we get error here');
    }
  }, []);

  return [runMutation];

}

export const tokenAuthMutation = gql`
  mutation TokenAuth($authInput: JwtRequest!) {
    createToken(authInput: $authInput) {
      jwtToken
    }
  }
`;
