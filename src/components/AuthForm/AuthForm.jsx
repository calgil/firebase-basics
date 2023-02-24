/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../../providers/firebase.provider";
import { InputBase } from "../InputBase/InputBase";
import s from "./AuthForm.module.css";

export const AuthForm = ({ inputs, title, buttonText, link, onSubmit }) => {
  const navigate = useNavigate();
  const { googleSignIn } = useFirebaseAuth();
  const handleGoogleSignIn = () => {
    googleSignIn();
    // TODO: add error handling
    navigate("/");
  };
  return (
    <section>
      <div className={s.formContainer}>
        <form onSubmit={onSubmit} className={s.form}>
          <h3 className={s.title}>{title}</h3>
          {inputs.map((input) => (
            <InputBase data={input} key={input.name} />
          ))}
          <button className={s.submitBtn} type="submit">
            {buttonText}
          </button>
        </form>
        <Link className={s.link} to={link.path}>
          {link.text}
        </Link>
        <button onClick={handleGoogleSignIn}>Google</button>
      </div>
    </section>
  );
};
