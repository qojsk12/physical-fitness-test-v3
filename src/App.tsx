import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import PhysicalFitnessAssessment from './components/PhysicalFitnessAssessment';
import {useEffect, useState} from 'react';
import LoadingScrean from './components/loading-screen';
import {auth} from './firebase';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Guide from './components/Guide';
import {AssessmentProvider} from './components/AssessmentContext';
import ProtectedRoute from './components/ProtectedRoute';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Jua", sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'physical',
        element: <PhysicalFitnessAssessment />,
      },
      {
        path: '/guide',
        element: <Guide />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

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
        <AssessmentProvider>
          <RouterProvider router={router} />
        </AssessmentProvider>
      )}
    </>
  );
}

export default App;
