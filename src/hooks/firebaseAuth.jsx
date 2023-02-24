import { initializeApp } from "firebase/app";
import {
  // createUserWithEmailAndPassword,
  // updateProfile,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";

// move these things to .env file

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
const provider = new GoogleAuthProvider();

// export const registerNewUser = (username, email, password) => {
//   console.log({ username, email, password });
//   createUserWithEmailAndPassword(auth, email, password).then(
//     (userCredential) => {
//       const user = userCredential.user;
//       if (user) {
//         return updateProfile(auth.currentUser, {
//           displayName: username,
//         });
//       }
//     }
//   );
// };

export { auth, provider };
