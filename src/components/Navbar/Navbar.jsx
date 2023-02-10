/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : `${s.link}`
          }
          to="/"
        >
          Firebase
        </NavLink>
      </div>
      <ul className={s.linksList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : `${s.link}`
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : `${s.link}`
            }
            to="/register"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
