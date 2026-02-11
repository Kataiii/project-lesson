import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { AUTH_URL } from "../types/consts/routing";

export const AuthLayout: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  if (!isAuth) return <Navigate to={AUTH_URL} />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
