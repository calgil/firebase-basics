/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { useFirebaseAuth } from "../providers/firebase.provider";
import registerBg from "../assets/registerBg.webp";

export default function RegisterUser() {
  const navigate = useNavigate();
  const { registerNewUser } = useFirebaseAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    registerNewUser(username, email, password);
    navigate("/");
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
      backgroundImage={registerBg}
      inputs={inputData}
      title="Create an account"
      buttonText="New account"
      link={link}
    />
  );
}
