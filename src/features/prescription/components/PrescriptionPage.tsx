// src/features/prescription/components/PrescriptionPage.tsx
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import PageGrid from "./PageGrid";
import { PrescriptionImage, PrescriptionPage as PageType } from "../types";
import styled from "styled-components";
import { motion } from "framer-motion";

const Page = styled.div`
  padding: 30px;
  background: white;
  border: 3px solid #000;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 32px;

  /* 🔥 인쇄 시 정확히 A4에 꽉 차게 + 디자인 완벽 유지 */
  @media print {
    width: 100% !important;
    height: 100vh !important;
    padding: 30px !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    page-break-after: always;
    page-break-inside: avoid;
    overflow: hidden;
    box-sizing: border-box;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #797979;
  flex-shrink: 0;

  @media print {
    font-size: 32px !important;
    margin-bottom: 16px !important;
    padding-bottom: 12px !important;
  }
`;

const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media print {
    flex: 1 !important;
    height: auto !important;
  }
`;

const Explain = styled.div`
  border: 2px solid #797979;
  border-radius: 10px;
  height: 100px;
  min-height: 100px;
  max-height: 100px;
  flex-shrink: 0;
  background: white;

  @media print {
    height: 100px !important;
    min-height: 100px !important;
    max-height: 100px !important;
    margin-top: 20px !important;
    border: 2px solid #797979 !important;
    border-radius: 10px !important;
  }
`;

const DeleteButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #ef4444;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;

  /* 인쇄 시 완전 제거 */
  @media print {
    display: none !important;
  }
`;

interface Props {
  id: string;
  page: PageType;
  pageNumber: number;
  totalPages: number;
  onUpdate: (images: PrescriptionImage[]) => void;
  onDelete: () => void;
}

export default function PrescriptionPage({
  id,
  page,
  totalPages,
  onUpdate,
  onDelete,
}: Props) {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(page.images);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    onUpdate(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Page id={id} data-prescription-page>
        {totalPages > 1 && (
          <DeleteButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onDelete}
          >
            X
          </DeleteButton>
        )}
        <Title>운동 처방전</Title>
        <PageContent>
          <PageGrid pageId={id} images={page.images} onChange={onUpdate} />
          <Explain />
        </PageContent>
      </Page>
    </DragDropContext>
  );
}
