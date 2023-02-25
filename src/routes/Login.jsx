import { useState } from "react";
import { AuthForm } from "../components/AuthForm/AuthForm";
import loginBg from "../assets/loginBg.webp";

/* eslint-disable react/react-in-jsx-scope */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log({ email, password });
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
      onSubmit={login}
      backgroundImage={loginBg}
      inputs={inputData}
      title="Welcome Back"
      buttonText="Login"
      link={link}
    />
  );
}
