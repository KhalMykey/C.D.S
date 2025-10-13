import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";
import LandingPage from "./routes/landingPage/landingPage.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path="SignIn" element={<div>Sign In Page</div>} />
        <Route path="Features" element={<div>Features Page</div>} />
        <Route path="Pricing" element={<div>Pricing Page</div>} />
      </Route>
    </Routes>
  );
};

export default App;
