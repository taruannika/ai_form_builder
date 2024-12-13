import { useAuth } from "../context/AuthContext";
import logo from "/logo.svg";

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="p-5 border-b shadow-sm">
      <div className="flex justify-between items-center">
        <img
          className="w-[140px] md:w-[180px]  h-[50px]"
          src={logo}
          alt="logo"
        />
        <button className="btn btn-primary">Get Started</button>
      </div>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Header;
