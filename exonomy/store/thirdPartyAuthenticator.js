import { defineStore } from 'pinia';

export const useThirdPartyAuthenticatorStore = defineStore('thirdPartyAuthenticator', {
  state: () => ({
    authenticators: [],
    currentAuthenticator: null,
  }),
  actions: {
    addAuthenticator(authenticator) {
      this.authenticators.push(authenticator);
    },
    removeAuthenticator(authenticatorId) {
      this.authenticators = this.authenticators.filter(auth => auth.id !== authenticatorId);
    },
    setCurrentAuthenticator(authenticator) {
      this.currentAuthenticator = authenticator;
    },
  },
});
