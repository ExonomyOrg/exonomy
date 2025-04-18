import { DID } from 'dids';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
import { useDIDStore } from '@/store/did';
import { verifyJWT, createJWT } from 'did-jwt';
import { Resolver } from 'did-resolver';
import { getResolver as ethrGetResolver } from 'ethr-did-resolver';

export default defineNuxtPlugin((nuxtApp) => {
  const didStore = useDIDStore();

  const generateKey = () => {
    const key = new Uint8Array(32);
    window.crypto.getRandomValues(key);
    return key;
  };

  const createDID = async () => {
    const key = generateKey();
    const provider = new Ed25519Provider(key);
    const did = new DID({ provider, resolver: getResolver() });
    await did.authenticate();
    return did;
  };

  const signIn = async (did, password) => {
    // Implement your DID authentication logic here
    // For example, you can use a password-based encryption scheme to decrypt the DID key
    // and then authenticate the DID using the decrypted key
  };

  const signUp = async (username, did, password) => {
    // Implement your DID registration logic here
    // For example, you can store the DID and the encrypted key in a database
  };

  const verifyDID = async (jwt) => {
    const resolver = new Resolver({
      ...getResolver(),
      ...ethrGetResolver(),
    });
    const verified = await verifyJWT(jwt, { resolver });
    return verified;
  };

  const createDIDJWT = async (payload, did, secret) => {
    const jwt = await createJWT(payload, { issuer: did, signer: secret });
    return jwt;
  };

  nuxtApp.provide('didAuth', {
    createDID,
    signIn,
    signUp,
    verifyDID,
    createDIDJWT,
  });
});
