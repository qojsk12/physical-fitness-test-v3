// src/features/prescription/components/ImageItem.tsx (이 파일 수정 - 이미지 자동 조절 + 인쇄 시 동일 적용)

import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { PrescriptionImage } from "../types";

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  cursor: grab;
  width: 100%;
  height: 100%;

  &:active {
    cursor: grabbing;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // 🔥 칸 크기에 맞게 이미지 자동 조절 (확대되지 않고 전체 보임)
    display: block;
    background-color: #fff;
  }

  // 🔥 인쇄 시 동일 디자인 적용 (칸 크기 + object-fit 유지)
  @media print {
    img {
      object-fit: contain !important; // 강제 적용
      max-width: 100% !important;
      max-height: 100% !important;
    }
  }
`;

const Delete = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;

  // 인쇄 시 삭제 버튼 숨김
  @media print {
    display: none !important;
  }
`;

interface Props {
  image: PrescriptionImage;
  index: number;
  onDelete: () => void;
}

export default function ImageItem({ image, index, onDelete }: Props) {
  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img src={image.url} alt="" />
          <Delete
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            ×
          </Delete>
        </Container>
      )}
    </Draggable>
  );
}
