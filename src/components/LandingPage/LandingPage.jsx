/* eslint-disable react/react-in-jsx-scope */
import { signOut } from "firebase/auth";
import { auth } from "../../hooks/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

export const LandingPage = () => {
  const [user] = useAuthState(auth);
  console.log({ user });
  return (
    <div>
      {user && <p>{user.displayName}</p>}
      <button onClick={async () => await signOut(auth)}>Logout</button>
    </div>
  );
};
