// src/features/prescription/components/PrescriptionPage.tsx (완전 수정된 전체 코드 - 기존 기능 100% 유지 + 크래시 방지 + 스크롤 지원)

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import PageGrid from "./PageGrid";
import { PrescriptionImage, PrescriptionPage as PageType } from "../types";
import styled from "styled-components";
import { motion } from "framer-motion";

// src/features/prescription/components/PrescriptionPage.tsx (이 파일 수정 - 패딩 30px로 동기화)

const Page = styled.div`
  padding: 30px; // ← 화면에서도 30px로 통일 (인쇄와 동일하게)
  box-sizing: border-box;
  background: white;
  border: 3px solid #000;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;

  // 🔥 화면에서도 flex로 꽉 채움 (인쇄와 동일)
  display: flex;
  flex-direction: column;
`;

// 나머지 코드 그대로 유지 (DeleteButton, Title 등)

const Content = styled.div`
  flex: 1; // Title과 Grid 사이 공간 꽉 채움
  display: flex;
  flex-direction: column;
`;

const GridWrapper = styled.div`
  flex: 1; // Grid가 남은 공간 100% 채움
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #797979;
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
`;

const Explain = styled.div`
  border: 2px solid #000;
  height: 50px;
  border-radius: 10px;
  margin-top: 16px;
`;

interface Props {
  id: string;
  page: PageType; // prop으로 직접 받아서 undefined 방지
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
        <Content>
          <GridWrapper>
            <PageGrid pageId={id} images={page.images} onChange={onUpdate} />
          </GridWrapper>
          {/* <Explain></Explain> */}
        </Content>
      </Page>
    </DragDropContext>
  );
}
