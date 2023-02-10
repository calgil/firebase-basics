import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const useFirebaseAuth = () => {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBJxTV5zdbWreDm5zF0MByHFIDLzE5S6O0",
    authDomain: "fire-auth-2618f.firebaseapp.com",
    projectId: "fire-auth-2618f",
    storageBucket: "fire-auth-2618f.appspot.com",
    messagingSenderId: "622835392394",
    appId: "1:622835392394:web:5211f1aa6481825560f273",
    measurementId: "G-SSCNFFJ3XD",
  });

  const auth = getAuth(firebaseApp);
  return auth;
};
