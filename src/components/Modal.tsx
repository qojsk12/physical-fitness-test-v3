// components/Modal.tsx
import React from 'react';
import styled, {keyframes} from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

// 애니메이션이 적용된 Wrapper
const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${({isOpen}) => (isOpen ? fadeIn : fadeOut)} 0.4s ease-in-out;
  visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
`;

// 애니메이션이 적용된 ModalBox
const ModalBox = styled.div<{isOpen: boolean}>`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 1200px;
  width: 100%;
  max-height: 900px;
  animation: ${({isOpen}) => (isOpen ? fadeIn : fadeOut)} 0.4s ease-in-out;
`;

// 닫기 버튼 스타일
const Button = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  &:hover {
    color: red;
  }
`;

export default function Modal({isOpen, onClose, children}: ModalProps) {
  // 모달이 닫힐 때 렌더링 방지
  if (!isOpen) return null;

  return (
    <ContainerWrapper onClick={(e) => e.stopPropagation()}>
      <Wrapper isOpen={isOpen} onClick={onClose}>
        <ModalBox isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          <Button onClick={onClose}></Button>
          {children}
        </ModalBox>
      </Wrapper>
    </ContainerWrapper>
  );
}
