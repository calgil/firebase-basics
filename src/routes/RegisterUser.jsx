/* eslint-disable react/react-in-jsx-scope */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { useFirebaseAuth } from "../hooks/firebaseAuth";

export async function action({ request }) {
  return Promise.resolve()
    .then(async () => {
      const formData = await request.formData();
      return formData;
    })
    .then((formData) => {
      const newUserData = Object.fromEntries(formData);
      console.log({ newUserData });
      // probably add confirm password input
      // check if both are same here
      return newUserData;
    })
    .then(({ email, password, confirmPassword }) => {
      return { email, password, confirmPassword };
    })
    .then(async ({ email, password }) => {
      const auth = useFirebaseAuth();
      return createUserWithEmailAndPassword(auth, email, password);
    })
    .then((userCredential) => {
      const user = userCredential.user;
      console.log({ user });
    })
    .then(() => {
      redirect("/");
      return null;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      return null;
    });
}

export default function RegisterUser() {
  const inputData = [
    {
      labelText: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      labelText: "Password",
      name: "password",
      type: "password",
      placeholder: "Create password",
    },
    {
      labelText: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
    },
  ];

  const link = {
    path: "/login",
    text: "Already have an account?",
  };
  return (
    <AuthForm
      inputs={inputData}
      title="Create an account"
      buttonText="New account"
      link={link}
    />
  );
}
