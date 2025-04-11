import { defineStore } from 'pinia';

export const useDIDStore = defineStore('did', {
  state: () => ({
    currentDID: null,
    dids: [],
  }),
  actions: {
    setCurrentDID(did) {
      this.currentDID = did;
    },
    addDID(did) {
      this.dids.push(did);
    },
    removeDID(didId) {
      this.dids = this.dids.filter(did => did.id !== didId);
    },
  },
});
