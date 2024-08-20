// components/Modal.tsx
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
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
`;

const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  max-height: 800px;
`;

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
  console.log(`Modal isOpen: ${isOpen}`);
  if (!isOpen) return null;

  return (
    <ContainerWrapper onClick={(e) => e.stopPropagation()}>
      <Wrapper onClick={onClose}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <Button onClick={onClose}>닫기</Button>
          {children}
        </ModalBox>
      </Wrapper>
    </ContainerWrapper>
  );
}
