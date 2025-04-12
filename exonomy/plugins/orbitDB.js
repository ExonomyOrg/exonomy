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

  const checkExpiredVouchers = async (db) => {
    const allEntries = db.all;
    const currentTime = new Date().getTime();
    for (const key in allEntries) {
      if (allEntries[key].expirationDate && allEntries[key].expirationDate < currentTime) {
        allEntries[key].status = 'expired';
        await db.put(key, allEntries[key]);
      }
    }
  };

  const checkRedeemedVouchers = async (db) => {
    const allEntries = db.all;
    for (const key in allEntries) {
      if (allEntries[key].status === 'redeemed') {
        // Handle redeemed voucher logic here
      }
    }
  };

  const checkCanceledVouchers = async (db) => {
    const allEntries = db.all;
    for (const key in allEntries) {
      if (allEntries[key].status === 'canceled') {
        // Handle canceled voucher logic here
      }
    }
  };

  const handleVoucherActions = async (db, action, voucherId, data) => {
    const voucher = await db.get(voucherId);
    if (voucher) {
      voucher.actions = voucher.actions || [];
      voucher.actions.push({ action, data, timestamp: new Date().getTime() });
      await db.put(voucherId, voucher);
    }
  };

  const handleVoucherInquiries = async (db, voucherId, inquiry) => {
    const voucher = await db.get(voucherId);
    if (voucher) {
      voucher.inquiries = voucher.inquiries || [];
      voucher.inquiries.push({ inquiry, timestamp: new Date().getTime() });
      await db.put(voucherId, voucher);
    }
  };

  const mintVoucher = async (db, voucher) => {
    await db.put(voucher.id, voucher);
  };

  const publishVoucher = async (db, voucherId) => {
    const voucher = await db.get(voucherId);
    if (voucher) {
      voucher.published = true;
      await db.put(voucherId, voucher);
    }
  };

  const searchVouchers = async (db, criteria) => {
    const allEntries = db.all;
    return Object.values(allEntries).filter(voucher => {
      return Object.keys(criteria).every(key => voucher[key] === criteria[key]);
    });
  };

  nuxtApp.provide('orbitDB', {
    createDB,
    getDB,
    addEntry,
    getEntry,
    checkExpiredVouchers,
    checkRedeemedVouchers,
    checkCanceledVouchers,
    handleVoucherActions,
    handleVoucherInquiries,
    mintVoucher,
    publishVoucher,
    searchVouchers,
  });
});
