/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../hooks/firebaseAuth";

const FirebaseAuthContext = createContext({});

export const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth", user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const registerNewUser = async (email, password) => {
    console.log("Create New User", { email, password });
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user was created", userCredential.user);
      }
    );
  };

  const updateUser = async (updates) => {
    await updateProfile(auth.currentUser, updates)
      .then(() => {
        console.log("success!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const registerNewUser = async (username, email, password) => {
  //   console.log("Create New User", { email, password });
  //   createUserWithEmailAndPassword(auth, email, password).then(
  //     (userCredential) => {
  //       console.log("user was created", userCredential.user);
  //       if (auth.currentUser) {
  //         updateProfile(auth.currentUser, { displayName: username });
  //       }
  //     }
  //   );
  // };

  // const registerNewUser = async (username, email, password) => {
  //   console.log("Create New User", { username, email, password });
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log("created", { user });
  //       if (user) {
  //         return username;
  //       }
  //     })
  //     .then((username) => {
  //       updateProfile(auth.currentUser, { displayName: username });
  //     })
  //     .catch((error) => {
  //       throw new Error(error.message);
  //     });
  // };

  const signInUser = async (email, password) => {
    console.log("sign in", { email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

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
      value={{
        currentUser,
        registerNewUser,
        googleSignIn,
        signInUser,
        updateUser,
      }}
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
    signInUser: context.signInUser,
    updateUser: context.updateUser,
  };
};
