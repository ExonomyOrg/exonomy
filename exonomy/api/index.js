import express from 'express';
import { useDIDStore } from '@/store/did';
import { useTenantAppsStore } from '@/store/tenantApps';
import { useThirdPartyAuthenticatorStore } from '@/store/thirdPartyAuthenticator';

const app = express();
app.use(express.json());

const didStore = useDIDStore();
const tenantAppsStore = useTenantAppsStore();
const thirdPartyAuthenticatorStore = useThirdPartyAuthenticatorStore();

app.post('/api/did', (req, res) => {
  const { did } = req.body;
  didStore.addDID(did);
  res.status(201).send({ message: 'DID added successfully' });
});

app.delete('/api/did/:id', (req, res) => {
  const { id } = req.params;
  didStore.removeDID(id);
  res.status(200).send({ message: 'DID removed successfully' });
});

app.post('/api/tenant-app', (req, res) => {
  const { app } = req.body;
  tenantAppsStore.addTenantApp(app);
  res.status(201).send({ message: 'Tenant app added successfully' });
});

app.delete('/api/tenant-app/:id', (req, res) => {
  const { id } = req.params;
  tenantAppsStore.removeTenantApp(id);
  res.status(200).send({ message: 'Tenant app removed successfully' });
});

app.post('/api/third-party-authenticator', (req, res) => {
  const { authenticator } = req.body;
  thirdPartyAuthenticatorStore.addAuthenticator(authenticator);
  res.status(201).send({ message: 'Third-party authenticator added successfully' });
});

app.delete('/api/third-party-authenticator/:id', (req, res) => {
  const { id } = req.params;
  thirdPartyAuthenticatorStore.removeAuthenticator(id);
  res.status(200).send({ message: 'Third-party authenticator removed successfully' });
});

app.post('/api/install-app', (req, res) => {
  const { app } = req.body;
  // Implement the logic to attempt the installation of an existing app
  // If the app does not respond within the specified timeout period, cancel the installation operation
  res.status(201).send({ message: 'App installation attempted' });
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});
