/* eslint-disable react/react-in-jsx-scope */
// import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useFirebaseAuth } from "./providers/firebase.provider";
// import { auth } from "./hooks/firebaseAuth";

export default function Root() {
  // const [user] = useAuthState(auth);
  // console.log("root ", user);
  const { currentUser } = useFirebaseAuth();
  return (
    <div id="outlet">
      <Navbar currentUser={currentUser} />
      <Outlet />
    </div>
  );
}
