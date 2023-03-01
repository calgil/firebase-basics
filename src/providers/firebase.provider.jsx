/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../hooks/firebaseAuth";

const FirebaseAuthContext = createContext({});

export const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("auth state change", { user });
  //       return setCurrentUser(user);
  //     }
  //     return setCurrentUser(null);
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth", user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const registerNewUser = async (username, email, password) => {
    console.log("Create New User", { username, email, password });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("created", { user });
        if (user) {
          return username;
        }
      })
      .then((username) => {
        updateProfile(auth.currentUser, { displayName: username });
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  // const registerNewUser = (username, email, password) => {
  //     console.log("Create New User", { username, email, password });
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log("created", { user });
  //         if (user) {
  //           return username;
  //         }
  //       })
  //       .then((username) => {
  //         updateProfile(auth.currentUser, { displayName: username });
  //       })
  //       .catch((error) => {
  //         throw new Error(error.message);
  //       });
  //   };

  const googleSignIn = () => {
    console.log("google");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log({ token });
        const user = result.user;
        if (user) {
          setCurrentUser(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  return (
    <FirebaseAuthContext.Provider
      value={{ currentUser, registerNewUser, googleSignIn }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  return {
    currentUser: context.currentUser,
    registerNewUser: context.registerNewUser,
    googleSignIn: context.googleSignIn,
    // updateUser: context.updateUser,
  };
};
