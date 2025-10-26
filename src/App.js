import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Display from "./routes/display/display.components";
import Authentication from "./routes/authentication/authentication.components";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);
      // console.log(setCurrentUser(user));
      dispatch(setCurrentUser(pickedUser));
      pickedUser ? navigate("/Dashboard") : navigate("/");
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      {/* first check the auth and if true render user dashboard, if false render authentication page */}
      <Route path="/" element={<Authentication />} />
      <Route path="Dashboard" element={<Display />} />
      <Route path="Calendar" element={<Display />} />
      <Route path="Playbook" element={<Display />} />
      <Route path="Trades" element={<Display />} />
      <Route path="Reports" element={<Display />} />
      <Route path="Import" element={<Display />} />
      <Route path="Settings" element={<Display />} />
    </Routes>
  );
};

export default App;
