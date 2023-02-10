/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import s from "./InputBase.module.css";
export const InputBase = ({ data: { labelText, type, name, placeholder } }) => {
  return (
    <div className={s.inputContainer}>
      <label className={s.label}>{labelText}</label>
      <input
        placeholder={placeholder}
        className={s.input}
        name={name}
        type={type}
        autoComplete="off"
      />
    </div>
  );
};
