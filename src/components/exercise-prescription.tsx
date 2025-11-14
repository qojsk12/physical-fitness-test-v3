import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { motion, AnimatePresence } from "framer-motion";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PrescriptionPDF from "./PrescriptionPDF";

// === 전역 box-sizing 적용 ===
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* 브라우저 기본 스크롤 제거 */
  }
`;

// === 스타일 ===
const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden; /* 스크롤 제거 */
  background: #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
`;

const ScrollWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 0; /* 여기서만 padding */
  -webkit-overflow-scrolling: touch;
`;

const ContentWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// === 고정 버튼 ===
const AddPageButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1d4ed8;
    transform: scale(1.1);
  }
`;

const PDFButton = styled(PDFDownloadLink)`
  position: fixed;
  bottom: 100px;
  right: 30px;
  padding: 14px 24px;
  background: #dc2626;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #b91c1c;
  }
`;

// === 페이지 스타일 (동일) ===
const PrescriptionPageWrapper = styled(motion.div)`
  background: white;
  border: 3px solid #000;
  border-radius: 20px;
  padding: 24px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #797979;
`;

const ExerciseGroup = styled.div<{ count: number }>`
  display: grid;
  gap: 10px;
  border: 2px solid #797979;
  border-radius: 16px;
  padding: 16px;
  min-height: 700px;
  background-color: #fafafa;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  ${({ count }) =>
    count > 4 &&
    `
    grid-template-columns: repeat(${Math.ceil(Math.sqrt(count))}, 1fr);
    grid-template-rows: repeat(${Math.ceil(Math.sqrt(count))}, 1fr);
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background-color: #f0f0f0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: rgba(220, 38, 38, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background: rgb(220, 38, 38);
    transform: scale(1.15);
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  background-color: #f8f8f8;
  border: 2px dashed #ccc;
  border-radius: 12px;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-color: #999;
    color: #333;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const Explain = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: #555;
  text-align: center;
  padding: 16px;
  background: #fff;
  border: 2px solid #797979;
  border-radius: 16px;
`;

// === 타입 ===
interface PageData {
  id: string;
  images: string[];
}

// === 메인 앱 ===
export default function ExercisePrescription() {
  const [pages, setPages] = useState<PageData[]>([
    { id: `page-${Date.now()}`, images: [] },
  ]);

  const addPage = () => {
    const newId = `page-${Date.now()}`;
    setPages((prev) => [...prev, { id: newId, images: [] }]);
    setTimeout(() => {
      document.getElementById(newId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const updatePage = (pageId: string, newImages: string[]) => {
    setPages((prev) =>
      prev.map((p) => (p.id === pageId ? { ...p, images: newImages } : p))
    );
  };

  const deletePage = (pageId: string) => {
    if (pages.length === 1) return;
    setPages((prev) => prev.filter((p) => p.id !== pageId));
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ScrollWrapper>
          <ContentWrapper>
            <AnimatePresence>
              {pages.map((page, idx) => (
                <PrescriptionPage
                  key={page.id}
                  id={page.id}
                  page={page}
                  pageNumber={idx + 1}
                  totalPages={pages.length}
                  onUpdate={(imgs) => updatePage(page.id, imgs)}
                  onDelete={() => deletePage(page.id)}
                />
              ))}
            </AnimatePresence>
          </ContentWrapper>
        </ScrollWrapper>

        <AddPageButton
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={addPage}
        >
          +
        </AddPageButton>

        <PDFButton
          document={<PrescriptionPDF pages={pages} />}
          fileName="운동처방전_전체.pdf"
        >
          {({ loading }) => (loading ? "PDF 생성 중..." : <>PDF 다운로드</>)}
        </PDFButton>
      </AppContainer>
    </>
  );
}

// === 개별 페이지 (동일) ===
function PrescriptionPage({
  id,
  page,
  pageNumber,
  totalPages,
  onUpdate,
  onDelete,
}: {
  id: string;
  page: PageData;
  pageNumber: number;
  totalPages: number;
  onUpdate: (images: string[]) => void;
  onDelete: () => void;
}) {
  const [images, setImages] = useState<string[]>(page.images);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const newImages = [...images, result];
      setImages(newImages);
      onUpdate(newImages);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(images);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setImages(items);
    onUpdate(items);
  };

  const deleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onUpdate(newImages);
  };

  const totalImages = images.length;
  const fixedSlots = 4;
  const displayCount = Math.max(fixedSlots, totalImages);

  return (
    <PrescriptionPageWrapper
      id={id}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -40 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Title>운동 처방전 {pageNumber}페이지</Title>

      <FileInput
        id={`upload-${id}`}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={`grid-${id}`}>
          {(provided) => (
            <ExerciseGroup
              count={totalImages}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Array.from({ length: displayCount }).map((_, index) => {
                const hasImage = index < totalImages;
                const isEmptySlot = index >= totalImages && index < fixedSlots;

                return (
                  <Draggable
                    key={hasImage ? `img-${index}` : `slot-${index}`}
                    draggableId={
                      hasImage ? `img-${id}-${index}` : `slot-${id}-${index}`
                    }
                    index={index}
                    isDragDisabled={!hasImage}
                  >
                    {(dragProvided) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                      >
                        {hasImage ? (
                          <ImageContainer>
                            <img
                              src={images[index]}
                              alt={`운동 ${index + 1}`}
                            />
                            <DeleteButton
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteImage(index);
                              }}
                            >
                              X
                            </DeleteButton>
                          </ImageContainer>
                        ) : isEmptySlot ? (
                          <label
                            htmlFor={`upload-${id}`}
                            style={{ display: "block", height: "100%" }}
                          >
                            <Placeholder>+ 이미지 추가</Placeholder>
                          </label>
                        ) : null}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ExerciseGroup>
          )}
        </Droppable>
      </DragDropContext>

      <Explain>
        {totalImages > 0
          ? `${totalImages}개 운동 • 드래그로 순서 변경 • X로 삭제`
          : "빈 슬롯을 클릭해 운동 이미지를 추가하세요"}
      </Explain>

      {totalPages > 1 && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#ef4444",
            color: "white",
            border: "none",
            width: 40,
            height: 40,
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={onDelete}
        >
          X
        </motion.button>
      )}
    </PrescriptionPageWrapper>
  );
}
