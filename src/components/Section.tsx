// components/Section.tsx

import React from 'react';
import '../styles/Section.css';
import {Item} from '../types';

interface SectionProps {
  title: string;
  activeSection: string | null;
  setActiveSection: (section: string) => void;
  listSection: string | null;
  handleListSectionClick: (list: string) => void;
  items: {section: string; label: string; data: Item[]}[];
}

const Section: React.FC<SectionProps> = ({
  title,
  activeSection,
  setActiveSection,
  listSection,
  handleListSectionClick,
  items,
}) => {
  return (
    <div className="ages">
      <ul className="teenager">
        <li>
          <span
            className="custom-div div-8"
            onClick={() => setActiveSection(title)}
          >
            {title}
          </span>
          {activeSection === title && (
            <ul className="physical__list">
              {items.map((item) => (
                <li
                  key={item.section}
                  className={`common ${
                    listSection === item.section ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick(item.section)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Section;
