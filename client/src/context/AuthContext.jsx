import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/current-user", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const signUp = async (credentials) => {
    const response = await axios.post("/api/auth/register", credentials, {
      withCredentials: true,
    });

    console.log(response.data);
    setUser(response.data.user);
  };

  const login = async (credentials) => {
    const response = await axios.post("/api/auth/login", credentials, {
      withCredentials: true,
    });

    console.log(response.data);
    setUser(response.data.user);
  };

  const logout = async () => {
    const response = await axios.post("/api/auth/logout");
    console.log(response.data);
    setUser(null);
  };

  const isAuthenticated = !!user;

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        user,
        signUp,
        login,
        logout,
        modalRef,
        openModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
