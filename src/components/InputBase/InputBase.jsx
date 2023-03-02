/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import s from "./InputBase.module.css";
export const InputBase = ({
  data: { labelText, type, name, placeholder, onChange },
}) => {
  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.label}>
        {labelText}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className={s.input}
        name={name}
        type={type}
        autoComplete="off"
      />
    </div>
  );
};
