/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../hooks/firebaseAuth";
import { useFirebaseAuth } from "../../providers/firebase.provider";

export const Navbar = () => {
  const { currentUser } = useFirebaseAuth();
  console.log("display", currentUser?.displayName);
  return (
    <div className={s.navbar}>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : `${s.link}`
          }
          to="/"
        >
          Home
        </NavLink>
      </div>
      {!currentUser && (
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
      )}
      {currentUser && <p>Hi {currentUser?.displayName}!</p>}
    </div>
  );
};
