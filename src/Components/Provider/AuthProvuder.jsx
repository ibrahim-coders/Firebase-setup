import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged(auth, users => {
  //   if (users) {
  //     console.log('corrently loooed user', users);
  //     setUser(users);
  //   } else {
  //     console.log('No user Logged in');
  //     setUser(null);
  //   }
  // });

  // const singOutUser = () => {
  //   return signOut(auth);
  // };

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, currentUser => {
      console.log('corrently loooed user', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscript();
    };
  }, []);

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
