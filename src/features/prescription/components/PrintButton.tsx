import { motion } from "framer-motion";
import styled from "styled-components";

const Btn = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 110px;
  width: 60px;
  height: 60px;
  background: #16a34a;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.3);
`;

export default function PrintButton({ onClick }: { onClick: () => void }) {
  return (
    <Btn
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      data-print-hide
    >
      Print
    </Btn>
  );
}
