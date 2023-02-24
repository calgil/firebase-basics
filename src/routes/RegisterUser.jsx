/* eslint-disable react/react-in-jsx-scope */
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { redirect } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { useFirebaseAuth } from "../providers/firebase.provider";
// import { registerNewUser } from "../hooks/firebaseAuth";

// export async function action({ request }) {
//   return Promise.resolve()
//     .then(async () => {
//       const formData = await request.formData();
//       return formData;
//     })
//     .then((formData) => {
//       const newUserData = Object.fromEntries(formData);
//       return newUserData;
//     })
//     .then(({ username, email, password }) => {
//       // .then(({ email, password, confirmPassword }) => {
//       // if (password !== confirmPassword) {
//       //   throw new Error("Passwords do not match");
//       // }
//       return { username, email, password };
//     })
//     .then(({ username, email, password }) => {
//       registerNewUser(username, email, password);
//     })
//     .then(() => {
//       return redirect("/");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log({ errorCode, errorMessage });
//       return null;
//     });
// }

export default function RegisterUser() {
  // const navigate = useNavigate();
  const { registerNewUser } = useFirebaseAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    registerNewUser(username, email, password);
  };

  const inputData = [
    {
      labelText: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      onChange: (e) => setUsername(e.target.value),
    },
    {
      labelText: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      labelText: "Password",
      name: "password",
      type: "password",
      placeholder: "Create password",
      onChange: (e) => setPassword(e.target.value),
    },
    // {
    //   labelText: "Confirm Password",
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm password",
    // },
  ];

  const link = {
    path: "/login",
    text: "Already have an account?",
  };
  return (
    <AuthForm
      onSubmit={createUser}
      inputs={inputData}
      title="Create an account"
      buttonText="New account"
      link={link}
    />
  );
}
