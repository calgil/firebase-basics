import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";

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
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log({ uid });
  } else {
    console.log("no user");
  }
});

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) {
      return console.log("no email or password");
    }
    console.log("register user");

    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  const signInUser = (e) => {
    e.preventDefault();

    if (!loginEmailInput || !loginPasswordInput) {
      return console.log("no email or password login");
    }

    signInWithEmailAndPassword(auth, loginEmailInput, loginPasswordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
      <form onSubmit={registerUser}>
        <label>
          Email:
          <input type="text" onChange={(e) => setEmailInput(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </label>
        <button type="submit">Register User</button>
      </form>
      <form onSubmit={signInUser}>
        <label>
          Email:
          <input
            type="text"
            onChange={(e) => setLoginEmailInput(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => setLoginPasswordInput(e.target.value)}
          />
        </label>
        <button type="submit">Login User</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
