/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../hooks/firebaseAuth";
import { useFirebaseAuth } from "../../providers/firebase.provider";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState(null);
  const { currentUser } = useFirebaseAuth();
  // // console.log({ currentUser });
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
      {!user && (
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
      {user && <p>Hi {user?.displayName}!</p>}
    </div>
  );
};
