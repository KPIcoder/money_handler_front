import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Header from "../layout/Header";
import ExamplePage from "../pages/ExamplePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { ENDPOINTS } from "./endpoints";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Navigate to={ENDPOINTS.login} />,
        index: true,
      },
      {
        path: ENDPOINTS.login,
        element: <LoginPage />,
      },
      {
        path: ENDPOINTS.register,
        element: <RegisterPage />,
      },
      {
        path: ENDPOINTS.user,
        element: (
          <AuthGuard>
            <ExamplePage />
          </AuthGuard>
        ),
      },
    ],
  },
]);
