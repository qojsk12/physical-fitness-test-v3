// src/features/prescription/hooks/usePrint.ts
import { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";

export const usePrint = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!printRef.current) return;

    const updateScale = () => {
      const el = printRef.current!;
      const pageHeight = el.offsetHeight;
      const targetHeight = 1050; // A4 실질 높이 (여백 고려)
      if (pageHeight > targetHeight) {
        setScale(targetHeight / pageHeight);
      } else {
        setScale(1);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(printRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "운동 처방전",
    pageStyle: `
      @page { size: A4 portrait; margin: 0; }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact;
          transform: scale(${scale});
          transform-origin: top left;
        }
      }
    `,
    onAfterPrint: () => console.log("인쇄 완료!"),
  });

  return { printRef, handlePrint };
};