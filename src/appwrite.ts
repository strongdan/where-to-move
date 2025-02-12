// src/appwrite.ts
import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67ad1e6e003861256d41'); 

export const account = new Account(client);
export { ID } from 'appwrite';
