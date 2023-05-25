import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Header from "../layout/Header";
import ExamplePage from "../pages/ExamplePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { ENDPOINTS } from "./endpoints";
import TransactionPage from "../pages/TransactionPage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Navigate to={ENDPOINTS.transactions} />,
        index: true,
      },
      {
        path: ENDPOINTS.transactions,
        element: <TransactionPage />,
      },
      {
        path: ENDPOINTS.about,
        element: <AboutPage />,
      },
      // {
      //   path: ENDPOINTS.login,
      //   element: <LoginPage />,
      // },
      // {
      //   path: ENDPOINTS.register,
      //   element: <RegisterPage />,
      // },
      // {
      //   path: ENDPOINTS.user,
      //   element: (
      //     <AuthGuard>
      //       <ExamplePage />
      //     </AuthGuard>
      //   ),
      // },
    ],
  },
]);
