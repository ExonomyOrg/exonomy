import OrbitDB from 'orbit-db';
import IPFS from 'ipfs';
import { useDIDStore } from '@/store/did';

export default defineNuxtPlugin(async (nuxtApp) => {
  const didStore = useDIDStore();

  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const createDB = async (dbName) => {
    const db = await orbitdb.keyvalue(dbName);
    await db.load();
    return db;
  };

  const getDB = async (dbName) => {
    const db = await orbitdb.open(dbName);
    await db.load();
    return db;
  };

  const addEntry = async (db, key, value) => {
    await db.put(key, value);
  };

  const getEntry = async (db, key) => {
    return db.get(key);
  };

  nuxtApp.provide('orbitDB', {
    createDB,
    getDB,
    addEntry,
    getEntry,
  });
});
