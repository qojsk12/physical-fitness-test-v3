// src/features/prescription/hooks/usePrint.ts (이 파일 수정 - pageStyle에 A4 지정)

import { useRef, useEffect, useState } from "react"; // useEffect, useState 추가 (자동 scale 위해)
import { useReactToPrint } from "react-to-print";

export const usePrint = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1); // 🔥 자동 scale 상태 (1 = 100%)

  // 🔥 콘텐츠 크기 계산해서 scale 자동 조절 (인쇄 전)
  useEffect(() => {
    if (!printRef.current) return;

    const updateScale = () => {
      const contentHeight = printRef.current?.scrollHeight || 0;
      const a4Height = 1122; // A4 px 단위 (대략 96dpi 기준 297mm ≈ 1122px, 실제 dpi 따라 조절)

      if (contentHeight > a4Height) {
        const newScale = a4Height / contentHeight;
        setScale(newScale); // 너무 크면 축소 (e.g., 0.8 = 80%)
      } else {
        setScale(1); // 작으면 그대로
      }
    };

    updateScale(); // 처음 로드 시 계산

    // 리사이즈 시 재계산 (이미지 추가 등)
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [printRef]);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "운동 처방전",
    pageStyle: `
      @page { 
        size: A4 portrait; 
        margin: 10mm; 
      }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact;
          transform: scale(${scale});  // 🔥 자동 scale 적용
          transform-origin: top left;
        }
      }
    `,
    onAfterPrint: () => console.log("인쇄 완료!"),
  });

  return { printRef, handlePrint };
};
