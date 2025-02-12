import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const login = (email) => {
    setAuthUser({ email }); // Store user email
    navigate("/profile"); // Redirect to profile
  };

  const logout = () => {
    setAuthUser(null);
    navigate("/"); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

//So context is like global state
