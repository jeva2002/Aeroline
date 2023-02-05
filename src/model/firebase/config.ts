import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDo8GDzX9qD0v0VLbkwdfhnljaNCLt-UYE',
  authDomain: 'airline-2dee4.firebaseapp.com',
  projectId: 'airline-2dee4',
  storageBucket: 'airline-2dee4.appspot.com',
  messagingSenderId: '635879627255',
  appId: '1:635879627255:web:6c3e1fe6be3277969536f2',
  measurementId: 'G-BZHFVYZ084',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const usersCollection = collection(db, 'users');
