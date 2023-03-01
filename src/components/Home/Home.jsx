/* eslint-disable react/react-in-jsx-scope */
import s from "./Home.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../hooks/firebaseAuth";

export const Home = () => {
  return (
    <div className={s.btnContainer}>
      <button onClick={async () => await signOut(auth)}>Logout</button>
    </div>
  );
};
