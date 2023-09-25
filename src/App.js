import { useState, useEffect } from "react";
import db, { auth, onAuthStateChanged } from "./utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { SignIn, Dashboard } from "./pages";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ubsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
        const snapshot = await getDoc(doc(db, "users", user.uid));
        setUserData(snapshot.data());
      } else {
        setUser(null);
      }
    });
    return ubsubscribe;
  }, []);

  return (
    <div className="App">
      {!user ? (
        <SignIn setUser={setUser} />
      ) : (
        <Dashboard user={user} userData={userData} />
      )}
    </div>
  );
}

export default App;
