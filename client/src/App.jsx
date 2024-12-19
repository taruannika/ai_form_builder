import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoutes from "./components/PrivateRoutes";
import DashBoardLayout from "./pages/DashBoardLayout";
import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard"
            element={
              <DashBoardLayout>
                <DashBoard />
              </DashBoardLayout>
            }
          />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
