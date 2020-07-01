import React, { Component } from 'react';
import sdk from '.';
import SocialUser from './SocialUser';
import { omit } from './utils';

export interface SocialLoginProps {
  appId: string;
  gateKeeper: string;
  autoCleanUri: boolean;
  autoLogin: boolean;
  getInstance: () => {};
  onLoginFailure: () => {};
  onLoginSuccess: () => {};
  onLogoutFailure: () => {};
  onLogoutSuccess: () => {};
  provider: 'github' | 'google';
  redirect: string;
  scope: string;
}
/**
 * React Higher Order Component handling social login for multiple providers.
 * @param {Element} WrappedComponent
 * @constructor
 */
const SocialLogin = (WrappedComponent: React.FC<SocialLoginProps>) =>
  class SocialLoginHoc extends Component<
  SocialLoginProps,
  { isLoaded: boolean; isConnected: boolean; isFetching: boolean }
  > {
    isStateless: boolean;

    sdk: any;

    accessToken: any;

    fetchProvider: boolean;

    loadPromise: Promise<void>;

    node: any;

    constructor(props: SocialLoginProps) {
      super(props);

      this.state = {
        isLoaded: false,
        isConnected: false,
        isFetching: false,
      };

      // Load required SDK
      this.sdk = sdk[props.provider];
      this.accessToken = null;
      this.loadPromise = Promise.resolve();
      this.node = null;

      this.onLoginSuccess = this.onLoginSuccess.bind(this);
      this.onLoginFailure = this.onLoginFailure.bind(this);
      this.onLogoutFailure = this.onLogoutFailure.bind(this);
      this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
      this.onInitSuccess = this.onInitSuccess.bind(this);
      this.logout = this.logout.bind(this);
    }

    /**
     * Loads SDK on componentDidMount and handles auto login.
     */
    componentDidMount() {
      const {
        appId,
        gateKeeper,
        autoCleanUri,
        autoLogin,
        redirect,
        scope,
      } = this.props;
      this.loadPromise = this.sdk
        .init({ appId, gateKeeper, redirect, scope })
        .then(() => {
          console.log('set is loaded to true');
        });
    }

    onInitSuccess(): void {
      this.setState({ isLoaded: true });
    }

    /**
     * Create SocialUser on login success and transmit it to onLoginSuccess prop.
     * @param {Object} response
     */
    onLoginSuccess(response: any) {
      const { onLoginSuccess, provider } = this.props;
      const user = new SocialUser(provider);
      const socialUserData = this.sdk.generateUser(response);

      user.profile = socialUserData.profile;
      user.token = socialUserData.token;

      // Here we check that node is not null,
      // so we can update state before
      // triggering login success function
      if (this.node) {
        this.setState(
          (prevState) => ({
            ...prevState,
            isFetching: false,
            isConnected: true,
          }),
          () => {
            if (typeof onLoginSuccess === 'function') {
              // onLoginSuccess(user);
            }
          }
        );
      } else if (typeof onLoginSuccess === 'function') {
        // onLoginSuccess(user);
      }
    }

    /**
     * Handles login failure.
     * @param err
     */
    onLoginFailure(err: any) {
      const { onLoginFailure } = this.props;

      if (this.node) {
        this.setState(
          (prevState) => ({
            ...prevState,
            isFetching: false,
            isConnected: false,
          }),
          () => {
            if (typeof onLoginFailure === 'function') {
              // onLoginFailure(err);
            }
          }
        );
      } else if (typeof onLoginFailure === 'function') {
        // onLoginFailure(err);
      }
    }

    /**
     * Handles logout success
     */
    onLogoutSuccess() {
      const { onLogoutSuccess } = this.props;

      if (this.node) {
        this.setState(
          (prevState) => ({
            ...prevState,
            isConnected: false,
          }),
          () => {
            if (typeof onLogoutSuccess === 'function') {
              onLogoutSuccess();
            }
          }
        );
      } else if (typeof onLogoutSuccess === 'function') {
        onLogoutSuccess();
      }
    }

    /**
     * Handles logout failure.
     * @param err
     */
    onLogoutFailure(err: any) {
      if (typeof this.props.onLoginFailure === 'function') {
        // this.props.onLoginFailure(err);
      }
    }

    /**
     * Triggers logout process.
     */
    logout() {
      if (this.state.isLoaded && this.state.isConnected) {
        this.sdk.logout().then(this.onLogoutSuccess, this.onLogoutFailure);
      } else if (this.state.isLoaded && !this.state.isConnected) {
        // this.props.onLoginFailure('User not connected');
      } else {
        // this.props.onLoginFailure('SDK not loaded');
      }
    }

    render() {
      // Don’t forward unneeded props
      const originalProps = omit(this.props, [
        'appId',
        'scope',
        'autoCleanUri',
        'autoLogin',
        'gatekeeper',
        'getInstance',
        'onLoginFailure',
        'onLoginSuccess',
        'onLogoutFailure',
        'onLogoutSuccess',
        'provider',
        'redirect',
        'ref',
      ]);
      let additionnalProps = {};

      if (this.props.onLogoutFailure || this.props.onLogoutSuccess) {
        additionnalProps = {
          triggerLogout: this.logout,
        };
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default SocialLogin;
