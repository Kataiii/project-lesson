import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { AUTH_URL } from "../types/consts/routing";

export const AuthLayout: React.FC = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to={AUTH_URL} />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
