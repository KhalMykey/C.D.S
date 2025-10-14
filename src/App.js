import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/authentication/authentication.components";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);
      console.log(setCurrentUser(user));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="SignIn" element={<div>Sign In Page</div>} />
        <Route path="Features" element={<div>Features Page</div>} />
        <Route path="Pricing" element={<div>Pricing Page</div>} />
      </Route>
    </Routes>
  );
};

export default App;
