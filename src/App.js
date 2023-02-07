import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { Header, Hero, Footer } from "./layout";
import { setUserAuth } from "./store/slices/AuthSlice";

const App = () => {
  const dispatch = useDispatch();

  // authentication listener
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const currentUser = {
        isAuth: true,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      };
      dispatch(setUserAuth(currentUser));
    } else {
      // User is signed out
      dispatch(
        setUserAuth({
          isAuth: false,
        })
      );
    }
  });

  return (
    <div className="min-vh-100 wrapper">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
