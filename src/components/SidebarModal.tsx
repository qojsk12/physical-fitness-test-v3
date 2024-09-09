import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Wrapper = styled.div<{isOpen: boolean}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: white;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 10px;
`;

const Overlay = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
`;

export default function SidebarModal({isOpen, onClose, children}: ModalProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <Wrapper isOpen={isOpen}>{children}</Wrapper>
    </>
  );
}
