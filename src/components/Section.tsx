import styled from 'styled-components';
import {Item} from '../types';
import {Span} from '../styles/styled-components';

interface SectionProps {
  title: string;
  activeSection: string | null;
  setActiveSection: (section: string) => void;
  listSection: string | null;
  handleListSectionClick: (list: string) => void;
  items: {section: string; label: string; data: Item[]}[];
}

const Ages = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 22px;
`;

const Ul = styled.ul<{isOpen: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  overflow: hidden;
  height: ${({isOpen}) => (isOpen ? '100px' : '0')}; /* 고정된 높이 */
  transition: height 0.5s ease;
  ${({isOpen}) => isOpen && `transition-delay: 0.1s;`}
`;

const Li = styled.li`
  box-sizing: border-box;
  padding: 4px;
  cursor: pointer;
  transition: opacity 5s ease-in-out, visibility 0.3s ease-in-out;

  &:hover {
    color: #d9ff00;
  }

  &:first-child {
    margin-top: 15px;
  }
`;

export default function Section({
  title,
  activeSection,
  setActiveSection,
  listSection,
  handleListSectionClick,
  items,
}: SectionProps) {
  return (
    <Ages>
      <Span onClick={() => setActiveSection(title)}>{title}</Span>
      <Ul isOpen={activeSection === title}>
        {items.map((item) => (
          <Li
            key={item.section}
            className={`common ${
              listSection === item.section ? 'clicked' : ''
            }`}
            onClick={() => handleListSectionClick(item.section)}
          >
            {item.label}
          </Li>
        ))}
      </Ul>
    </Ages>
  );
}
