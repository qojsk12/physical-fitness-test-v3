// src/features/prescription/components/PrescriptionEditor.tsx (이 파일만 바꾸면 끝 - 기존 스크롤 동작 100% 복원)

import { useState } from "react"; // ← useEffect 추가 (스크롤 위해)
import { usePrint } from "../hooks/usePrint";
import PrescriptionPage from "./PrescriptionPage";
import AddPageButton from "./AddPageButton";
import PrintButton from "./PrintButton";
import styled from "styled-components";
import { PrescriptionImage, PrescriptionPage as PageType } from "../types";
import { motion, AnimatePresence } from "framer-motion";

// 기존 스타일 복원 (스크롤 가능하게)
const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
`;

const ScrollWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
  -webkit-overflow-scrolling: touch;
  width: 900px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function PrescriptionEditor() {
  const [pages, setPages] = useState<PageType[]>([
    { id: `page-${Date.now()}`, images: [] },
  ]);

  const { printRef, handlePrint } = usePrint();

  const addPage = () => {
    const newId = `page-${Date.now()}`;
    setPages((prev) => [...prev, { id: newId, images: [] }]);

    // 기존처럼 스크롤 동작 추가
    setTimeout(() => {
      const newPageElement = document.getElementById(newId);
      if (newPageElement) {
        newPageElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const updatePage = (pageId: string, newImages: PrescriptionImage[]) => {
    setPages((prev) =>
      prev.map((p) => (p.id === pageId ? { ...p, images: newImages } : p))
    );
  };

  const deletePage = (pageId: string) => {
    if (pages.length === 1) return;
    setPages((prev) => prev.filter((p) => p.id !== pageId));
  };

  return (
    <AppContainer>
      <ScrollWrapper>
        <ContentWrapper ref={printRef}>
          <AnimatePresence>
            {pages.map((page, idx) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <PrescriptionPage
                  id={page.id}
                  page={page}
                  pageNumber={idx + 1}
                  totalPages={pages.length}
                  onUpdate={(imgs) => updatePage(page.id, imgs)}
                  onDelete={() => deletePage(page.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ContentWrapper>
      </ScrollWrapper>
      <PrintButton onClick={handlePrint} />
      <AddPageButton onClick={addPage} />
    </AppContainer>
  );
}
