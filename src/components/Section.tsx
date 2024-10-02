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

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  transition-delay: 1s;
`;

const Li = styled.li`
  box-sizing: border-box;
  padding: 4px;
  cursor: pointer;
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
      {activeSection === title && (
        <Ul>
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
      )}
    </Ages>
  );
}
