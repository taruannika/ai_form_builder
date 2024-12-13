import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
