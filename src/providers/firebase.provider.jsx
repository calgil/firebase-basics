/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../hooks/firebaseAuth";

const FirebaseAuthContext = createContext({});

export const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const user = auth.currentUser;
  console.log("fuck this!!", { user });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("auth state change", { user });
      return setCurrentUser(user);
    }
    return setCurrentUser(null);
  });

  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  return {
    currentUser: context.currentUser,
  };
};
