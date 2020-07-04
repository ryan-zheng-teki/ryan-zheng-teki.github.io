export default class SocialUser {
  provider: string;

  profile: {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePicUrl: string;
  };

  token: { accessToken: string; expiresAt: string };

  /**
   * Creates a social user.
   * @param {string} provider
   */
  constructor(provider: string) {
    this.provider = provider;

    this.profile = {
      id: undefined,
      name: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      profilePicUrl: undefined,
    };

    this.token = {
      accessToken: undefined,
      expiresAt: undefined,
    };
  }
}
