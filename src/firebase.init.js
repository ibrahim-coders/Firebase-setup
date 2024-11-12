// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-vyFoix7OESpRwsTMmGE4KY0B8gbFhA4',
  authDomain: 'auth-moha-milon-32d69.firebaseapp.com',
  projectId: 'auth-moha-milon-32d69',
  storageBucket: 'auth-moha-milon-32d69.firebasestorage.app',
  messagingSenderId: '903849019490',
  appId: '1:903849019490:web:907d7c285f90806484a93b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
