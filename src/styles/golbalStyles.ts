// src/styles/globalStyles.ts (이 파일 전체 교체 - 인쇄 시 패딩 30px로 정확히 줄임)

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
    
    @page {
      margin: 0 !important;  
    }

    html, body {
      height: auto;
      overflow: visible;
    }

    // 🔥 페이지 내부 패딩 30px로 정확히 줄임 (바깥 테두리 ~ 내용물 여백)
    [data-prescription-page] {
      width: 210mm !important;
      height: 297mm !important;
      min-height: 297mm !important;
      margin: 0 !important;
      padding: 30px !important;  // ← 30px로 수정 (기존 20mm → 30px, mm ≈ 2.83px라 30px ≈ 10.6mm)
      box-shadow: none !important;
      border-radius: 0 !important;
      page-break-after: always;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;  // 내용물 위아래 꽉 채움
    }

    // 그리드 영역이 페이지 높이 100% 채움
    [data-prescription-page] > div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    // 그리드 자체도 100% 채움
    [data-prescription-page] > div > div {
      flex: 1;
      height: 100% !important;
    }
  }
`;
