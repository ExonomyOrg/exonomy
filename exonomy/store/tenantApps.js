import { defineStore } from 'pinia';

export const useTenantAppsStore = defineStore('tenantApps', {
  state: () => ({
    tenantApps: [],
  }),
  actions: {
    addTenantApp(app) {
      this.tenantApps.push(app);
    },
    removeTenantApp(appId) {
      this.tenantApps = this.tenantApps.filter(app => app.id !== appId);
    },
    updateTenantApp(appId, updatedApp) {
      const index = this.tenantApps.findIndex(app => app.id === appId);
      if (index !== -1) {
        this.tenantApps[index] = updatedApp;
      }
    },
    setInstallationStatus(appId, status) {
      const index = this.tenantApps.findIndex(app => app.id === appId);
      if (index !== -1) {
        this.tenantApps[index].installationStatus = status;
      }
    },
  },
});
