import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div data-theme={"dark"}>
      <Header />
      <SignUpPage />
    </div>
  );
};

export default App;
