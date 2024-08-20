// context/AssessmentContext.tsx
import React, {createContext, useState, useEffect, ReactNode} from 'react';

// Context의 타입 정의
interface AssessmentContextType {
  activeSection: string | null;
  listSection: string | null;
  listImg: string | null;
  setActiveSection: (section: string | null) => void;
  setListSection: (section: string | null) => void;
  setListImg: (img: string | null) => void;
}

// Context와 Provider 생성
const AssessmentContext = createContext<AssessmentContextType | undefined>(
  undefined
);

const AssessmentProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [listSection, setListSection] = useState<string | null>(null);
  const [listImg, setListImg] = useState<string | null>(null);

  useEffect(() => {
    let mouseTimer: ReturnType<typeof setTimeout>;

    const handleMouseMove = () => {
      clearTimeout(mouseTimer);

      mouseTimer = setTimeout(() => {
        setActiveSection(null);
        setListSection(null);
        setListImg(null);
      }, 300000); // 5분(300,000ms) 후에 상태를 초기화
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, []);

  return (
    <AssessmentContext.Provider
      value={{
        activeSection,
        listSection,
        listImg,
        setActiveSection,
        setListSection,
        setListImg,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export {AssessmentProvider, AssessmentContext};