/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Form, Link } from "react-router-dom";
import { InputBase } from "../InputBase/InputBase";
import s from "./AuthForm.module.css";

export const AuthForm = ({ inputs, title, buttonText, link }) => {
  return (
    <section>
      <div className={s.formContainer}>
        <Form method="post" className={s.form}>
          <h3 className={s.title}>{title}</h3>
          {inputs.map((input) => (
            <InputBase data={input} key={input.name} />
          ))}
          <button type="submit">{buttonText}</button>
          {/* <SubmitBtn text={buttonText} /> */}
        </Form>
        <Link className={s.link} to={link.path}>
          {link.text}
        </Link>
      </div>
    </section>
  );
};
