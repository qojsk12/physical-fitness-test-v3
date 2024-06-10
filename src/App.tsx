import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import PhysicalFitnessAssessment from './routes/PhysicalFitnessAssessment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'physical',
        element: <PhysicalFitnessAssessment />,
      },
    ],
  },
]);

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
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
