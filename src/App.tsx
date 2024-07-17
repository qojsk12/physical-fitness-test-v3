import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PhysicalFitnessAssessment from "./components/PhysicalFitnessAssessment";
import { useEffect, useState } from "react";
import LoadingScrean from "./components/loading-screen";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./firebase";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Jua", sans-serif;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScrean />
      ) : (
        <BrowserRouter basename="physical-fitness-test-v3">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="physical" element={<PhysicalFitnessAssessment />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
