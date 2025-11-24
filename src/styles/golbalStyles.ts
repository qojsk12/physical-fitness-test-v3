// src/styles/globalStyles.ts
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { margin:0; padding:0; height:100%; overflow:hidden; }
  * { -ms-overflow-style: none; }
  ::-webkit-scrollbar { display: none; }

  body {
    background: #f3f4f6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  @media print {
    @page { margin: 0 !important; }

    html, body {
      height: auto;
      overflow: visible;
    }

    [data-prescription-page] {
      width: 100% !important;
      height: 100vh !important;
      margin: 0 !important;
      padding: 30px !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      page-break-after: always;
      display: flex !important;
      flex-direction: column !important;
    }

    [data-prescription-page] > div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    [data-prescription-page] > div > div {
      flex: 1;
      height: 100% !important;
      display: grid !important;
    }
  }
`;
