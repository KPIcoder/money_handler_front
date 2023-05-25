import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";
import { ENDPOINTS } from "../routes/endpoints";

interface Props {
  children: ReactNode;
}

const AuthGuard: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ENDPOINTS.login} state={pathname} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
