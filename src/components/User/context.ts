import SocialUser from '@sdk/sociallogin/SocialUser';
import React from 'react';
import { User } from './types/User';

export interface UserContextInterface {
  user: User | SocialUser;
}

export const UserContext = React.createContext<UserContextInterface>({
  user: null,
});

UserContext.displayName = 'UserContext';
