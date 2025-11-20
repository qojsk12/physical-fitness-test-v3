// src/features/prescription/components/PageGrid.tsx (이 파일 수정 - 그리드 크기 자동 조절 + 인쇄 시 디자인 적용)

import { Droppable } from "@hello-pangea/dnd";
import ImageItem from "./ImageItem";
import styled from "styled-components";
import { PrescriptionImage } from "../types";

const Grid = styled.div<{ count: number }>`
  display: grid;
  gap: 10px;
  border: 2px solid #797979;
  border-radius: 16px;
  padding: 16px;
  background-color: #fafafa;

  grid-template-columns: repeat(
    ${({ count }) => Math.ceil(Math.sqrt(Math.max(count, 4)))},
    1fr
  );

  grid-template-rows: repeat(
    ${({ count }) => Math.ceil(Math.sqrt(Math.max(count, 4)))},
    1fr
  );

  > * {
    aspect-ratio: 1.1 / 0.85;
  }

  @media print {
    height: 100% !important;
  }
`;

const EmptySlot = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  background-color: #f8f8f8;
  border: 2px dashed #ccc;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #f0f0f0;
    border-color: #999;
    color: #333;
  }

  // 🔥 인쇄 시 빈 슬롯 완전 숨김 (이미지만 보이게)
  @media print {
    display: none !important;
  }
`;

interface Props {
  pageId: string;
  images: PrescriptionImage[];
  onChange: (images: PrescriptionImage[]) => void;
}

export default function PageGrid({ pageId, images, onChange }: Props) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      onChange([...images, { id: crypto.randomUUID(), url: result }]);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const deleteImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const totalImages = images.length;
  const fixedSlots = 4; // 기본 2x2
  const displayCount = Math.max(fixedSlots, totalImages); // 이미지 많아지면 자동 확장

  return (
    <Droppable droppableId={pageId}>
      {(provided) => (
        <Grid
          count={displayCount} // 🔥 count로 그리드 동적 조절 (칸 크기 자동)
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {Array.from({ length: displayCount }).map((_, i) => {
            const img = images[i];
            return img ? (
              <ImageItem
                key={img.id}
                image={img}
                index={i}
                onDelete={() => deleteImage(i)}
              />
            ) : (
              <EmptySlot key={i} htmlFor={`upload-${pageId}`}>
                + 이미지 추가
              </EmptySlot>
            );
          })}
          <input
            id={`upload-${pageId}`}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFile}
          />
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );
}
