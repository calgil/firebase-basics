/* eslint-disable react/react-in-jsx-scope */
import { signOut } from "firebase/auth";
import { auth } from "../../hooks/firebaseAuth";

export const Home = () => {
  // const [testUser, setTestUser] = useState(null);
  // const [user] = useAuthState(auth);
  // useEffect(() => {
  //   setTestUser(user);
  // }, [user]);
  // console.log({ user });
  // console.log({ testUser });

  return (
    <div>
      {/* {loading && <>Loading ...</>} */}
      <button onClick={async () => await signOut(auth)}>Logout</button>

      {/* {error && <>Error !!!</>} */}
    </div>
  );
};
