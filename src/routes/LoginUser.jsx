import { useState } from "react";
import { AuthForm } from "../components/AuthForm/AuthForm";
import loginBg from "../assets/loginBg.webp";
import { useFirebaseAuth } from "../providers/firebase.provider";

/* eslint-disable react/react-in-jsx-scope */
export default function LoginUser() {
  const { signInUser } = useFirebaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (!email || !password) {
      return new Error("Email and Password are required");
    }
    signInUser(email, password);
  };
  const inputData = [
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
  ];

  const link = {
    path: "/login",
    text: "Already have an account?",
  };

  return (
    <AuthForm
      onSubmit={login}
      backgroundImage={loginBg}
      inputs={inputData}
      title="Welcome Back"
      buttonText="Login"
      link={link}
    />
  );
}
