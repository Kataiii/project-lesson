import { Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyles } from "./index.styles";
import { AuthLayout } from "./layouts/AuthLayout";
import { RoleLayout } from "./layouts/RoleLayout";
import { AdminPanel } from "./pages/AdminPanel";
import { Auth } from "./pages/Auth";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";
import { Register } from "./pages/Register";
import {
  ADMIN_PAGE_URL,
  AUTH_URL,
  MAIN_URL,
  PROJECTS_URL,
  PROJECT_URL,
  REGISTER_URL,
} from "./types/consts/routing";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes>
        <Route path={MAIN_URL} element={<AuthLayout />}>
          <Route index element={<Main />} />
          <Route path={PROJECTS_URL} element={<Projects />} />
          <Route path={PROJECT_URL} element={<Project />} />
          <Route path={ADMIN_PAGE_URL} element={<RoleLayout />}>
            <Route index element={<AdminPanel />} />
          </Route>
        </Route>
        <Route path={AUTH_URL} element={<Auth />} />
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
