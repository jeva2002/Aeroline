import { addDoc } from 'firebase/firestore';
import { usersCollection } from './config';
import { User } from './types';

export const createUserDoc = async (user: User) => {
  try {
    return await addDoc(usersCollection, user);
  } catch (error) {
    return error;
  }
};
