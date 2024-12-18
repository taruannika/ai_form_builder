import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "/logo.svg";

const Header = () => {
  const { logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="p-5 border-b shadow-sm">
      <div className="flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          className="w-[140px] md:w-[180px]  h-[50px] cursor-pointer"
          src={logo}
          alt="logo"
        />
        {isAuthenticated ? (
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate("/dashboard")}
              className="btn btn-outline"
            >
              DashBoard
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                {user.username}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <p>Settings</p>
                </li>
                <li>
                  <p className="bg-base-200" onClick={handleLogout}>
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
