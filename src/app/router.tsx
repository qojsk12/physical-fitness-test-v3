import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../features/layout/ProtectedRoute";
import Layout from "../features/layout/Layout";
import PrescriptionEditor from "../features/prescription/components/PrescriptionEditor";
import LoginPage from "../features/auth/routes/LoginPage";
import CreateAccountPage from "../features/auth/routes/CreateAccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <PrescriptionEditor /> },
      { path: "profile", element: <div>Profile 페이지 (미구현)</div> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/create-account", element: <CreateAccountPage /> },
]);