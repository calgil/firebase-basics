import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      Firebase Basics!
      <Link to="/login">Login Page</Link>
      <Outlet />
    </div>
  );
}
