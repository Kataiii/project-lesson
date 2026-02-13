import { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "../api/axiosClient";

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuth: boolean;
  login?: (email: string, password: string) => Promise<void>;
  register?: (name: string, email: string, passsword: string) => Promise<void>;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuth: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (token) setIsAuth(true);
    else setIsAuth(false);
  }, [token]);

  const login = async (email: string, password: string) => {
    const response = await axiosClient.post("/auth/login", {
      email: email,
      password: password,
    });
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
    setIsAuth(true);
  };

  const register = async (name: string, email: string, password: string) => {
    await axiosClient.post("/auth/register", {
      name: name,
      email: email,
      password: password,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuth, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
