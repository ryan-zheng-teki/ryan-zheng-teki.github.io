import React from 'react';
import { UserContext, UserContextInterface } from './context';

export default class UserProvider extends React.Component<
  {},
  UserContextInterface
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}
