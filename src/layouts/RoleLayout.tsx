import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RoleLayout: React.FC = () => {
  const [role, setRole] = useState<"user" | "admin">("user");

  if (role === "user") <Navigate to={"/not-found"} />;

  return (
    <>
      <Outlet />
    </>
  );
};
