import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  //shared function
  const login = (email) => {
    setAuthUser({ email }); // Store email during login
    navigate("/home");
  };

  const logout = () => {
    setAuthUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//custom hook which give access to context
export const useAuth = () => {
  return useContext(AuthContext);
};

//So context is like global state
