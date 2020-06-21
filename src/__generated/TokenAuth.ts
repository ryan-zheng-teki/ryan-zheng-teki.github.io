/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JwtRequest } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: TokenAuth
// ====================================================

export interface TokenAuth_createToken {
  __typename: "JwtResponse";
  jwtToken: string;
}

export interface TokenAuth {
  createToken: TokenAuth_createToken;
}

export interface TokenAuthVariables {
  authInput: JwtRequest;
}
