// components/PhysicalFitnessAssessment.tsx
import {useContext} from 'react';
import _ from 'lodash';
import Section from './Section';
import MainImg from './MainImg';
import {
  t__CardioItems,
  t__MuscularItems,
  a__CardioItems,
  a__SpeedItems,
  a__PowerItems,
  e__CadioItems,
} from './data';
import '../styles/PhysicalFitnessAssessment.css';
import List from './List';
import {Item} from '../types';
import {AssessmentContext} from '../components/AssessmentContext';

export default function PhysicalFitnessAssessment() {
  const context = useContext(AssessmentContext);

  if (!context) {
    throw new Error(
      'AssessmentContext must be used within an AssessmentProvider'
    );
  }

  const {
    activeSection,
    listSection,
    listImg,
    setActiveSection,
    setListSection,
    setListImg,
  } = context;

  const handleSectionClick = _.debounce((section: string) => {
    const newSection = activeSection === section ? null : section;
    setActiveSection(newSection);
  }, 50);

  const handleListSectionClick = _.debounce((list: string) => {
    const newList = listSection === list ? null : list;
    setListSection(newList);
  }, 50);

  const handleListImgClick = _.debounce((item: string) => {
    const newImg = listImg === item ? null : item;
    setListImg(newImg);
  }, 50);

  const renderList = (items: Item[]) => {
    return <List items={items} />;
  };

  return (
    <div className="container mobile">
      <div className="select__menu mobile">
        <h2 className="h2__title">생애주기</h2>
        <Section
          title="청소년기"
          activeSection={activeSection}
          setActiveSection={handleSectionClick}
          listSection={listSection}
          handleListSectionClick={handleListSectionClick}
          items={[
            {section: 't__cadio', label: '심폐지구력', data: t__CardioItems},
            {
              section: 't__muscular',
              label: '근지구력',
              data: t__MuscularItems,
            },
          ]}
        />
        <Section
          title="성인기"
          activeSection={activeSection}
          setActiveSection={handleSectionClick}
          listSection={listSection}
          handleListSectionClick={handleListSectionClick}
          items={[
            {section: 'a__cadio', label: '심폐지구력', data: a__CardioItems},
            {section: 'a__speed', label: '민첩성', data: a__SpeedItems},
            {section: 'a__power', label: '순발력', data: a__PowerItems},
          ]}
        />
        <Section
          title="어르신기"
          activeSection={activeSection}
          setActiveSection={handleSectionClick}
          listSection={listSection}
          handleListSectionClick={handleListSectionClick}
          items={[
            {section: 'e__cadio', label: '심폐지구력', data: e__CadioItems},
          ]}
        />
      </div>

      <div className="gif__description">
        {listSection === null && (
          <MainImg listImg={listImg} handleListImgClick={handleListImgClick} />
        )}
        {listSection === 't__cadio' && renderList(t__CardioItems)}
        {listSection === 't__muscular' && renderList(t__MuscularItems)}
        {listSection === 'a__cadio' && renderList(a__CardioItems)}
        {listSection === 'a__speed' && renderList(a__SpeedItems)}
        {listSection === 'a__power' && renderList(a__PowerItems)}
        {listSection === 'e__cadio' && renderList(e__CadioItems)}
      </div>
    </div>
  );
}
