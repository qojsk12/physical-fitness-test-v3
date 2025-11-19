import { motion } from "framer-motion";
import styled from "styled-components";

const Btn = styled(motion.button)`
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
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 8px 20px rgba(37,99,235,0.3);
`;

export default function AddPageButton({ onClick }: { onClick: () => void }) {
  return (
    <Btn whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClick}>
      +
    </Btn>
  );
}