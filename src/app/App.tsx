import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAuth } from "./hooks/useAuth";
import { GlobalStyles } from "../styles/golbalStyles";
import LoadingScreen from "../shared/ui/LoadingScreen";

export default function App() {
  const { isLoading } = useAuth();

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}