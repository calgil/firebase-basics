/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div>
        <Link
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : `${s.link}`
          }
          to="/"
        >
          Firebase
        </Link>
      </div>
      <ul className={s.linksList}>
        <li>
          <Link className={s.link} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
