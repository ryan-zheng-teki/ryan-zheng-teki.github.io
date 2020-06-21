import gql from 'graphql-tag';

export const tokenAuthMutation = gql`
  mutation TokenAuth($authInput: JwtRequest!) {
    createToken(authInput: $authInput) {
      jwtToken
    }
  }
`;