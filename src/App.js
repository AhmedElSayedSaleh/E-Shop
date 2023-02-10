import { onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { Header, Hero, Footer } from "./layout";
import { setUserAuth } from "./store/slices/AuthSlice";
import { setUserCart } from "./store/slices/CartSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

        // Get user cart data from firebase to redux store
        get(child(ref(getDatabase()), `users/${currentUser.uid}/cart`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              // console.log(snapshot.val());
              dispatch(setUserCart(snapshot.val()));
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // User is signed out
        dispatch(
          setUserAuth({
            isAuth: false,
          })
        );
        dispatch(
          setUserCart({ cartItems: [], totalCost: 0, totalQuantity: 0 })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="min-vh-100 wrapper">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
