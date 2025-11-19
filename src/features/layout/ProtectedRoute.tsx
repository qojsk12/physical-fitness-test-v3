import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/config";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return auth.currentUser ? <>{children}</> : <Navigate to="/login" replace />;
}
