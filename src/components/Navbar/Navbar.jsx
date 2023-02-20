/* eslint-disable react/react-in-jsx-scope */
// import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { useFirebaseAuth } from "../../providers/firebase.provider";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const { currentUser } = useFirebaseAuth();
  console.log({ currentUser });
  if (currentUser) {
    console.log("display name", currentUser.displayName);
  }

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
      {currentUser && <p>{currentUser.displayName} is logged in!</p>}
      {currentUser && currentUser.displayName && (
        <p>{currentUser.displayName} is the name!</p>
      )}
      {!currentUser && <p>Not logged in </p>}
    </div>
  );
};
