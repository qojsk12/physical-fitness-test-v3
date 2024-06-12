import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import PhysicalFitnessAssessment from './routes/PhysicalFitnessAssessment';

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
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path={`${process.env.PUBLIC_URL}/physical`}
              element={<PhysicalFitnessAssessment />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// test
export default App;
