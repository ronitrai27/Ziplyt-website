'use server';

import { client } from '@/lib/mongodb';

export const joinWaitingList = async (email: string) => {
  await client.connect();
  const db = client.db('ziplyt');
  const collection = db.collection('waiting-list');

  try {
    const existing = await collection.findOne({ email });
    if (existing) {
      return { success: true };
    }

    await collection.insertOne({ email, createdAt: new Date() });
    return { success: true };
  } catch (error) {
    console.log('Error joining waiting list:', error);
    return { success: false };
  } finally {
    await client.close();
  }
};

export const contactUs = async (data: {
  fullName: string;
  email: string;
  message: string;
}) => {
  await client.connect();
  const db = client.db('ziplyt');
  const collection = db.collection('contact-us');

  try {
    await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });
    return { success: true };
  } catch (error) {
    console.log('Error submitting contact form:', error);
    return { success: false };
  } finally {
    await client.close();
  }
};
