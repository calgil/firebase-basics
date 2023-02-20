/* eslint-disable react/react-in-jsx-scope */
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { registerNewUser } from "../hooks/firebaseAuth";

export async function action({ request }) {
  return Promise.resolve()
    .then(async () => {
      const formData = await request.formData();
      return formData;
    })
    .then((formData) => {
      const newUserData = Object.fromEntries(formData);
      return newUserData;
    })
    .then(({ username, email, password }) => {
      // .then(({ email, password, confirmPassword }) => {
      // if (password !== confirmPassword) {
      //   throw new Error("Passwords do not match");
      // }
      return { username, email, password };
    })
    .then(({ username, email, password }) => {
      registerNewUser(username, email, password);
    })
    .then(() => {
      return redirect("/");
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
      labelText: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
    },
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
      inputs={inputData}
      title="Create an account"
      buttonText="New account"
      link={link}
    />
  );
}
