import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {};

if (!uri) {
  throw new Error('Please add MONGODB_URI to your .env file');
}

export const client = new MongoClient(uri, options);
