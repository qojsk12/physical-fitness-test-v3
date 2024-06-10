// components/MainImg.tsx

import React from 'react';
import BloodDes from '../assets/images/BloodDes.png';
import Blood from '../assets/images/Blood.png';
import '../styles/MainImg.css';

interface MainImgProps {
  listImg: string | null;
  handleListImgClick: (item: string) => void;
}

const MainImg: React.FC<MainImgProps> = ({listImg, handleListImgClick}) => {
  return (
    <div className="physical__list-des">
      <div className="physical__list-item main">
        <div
          className="img__box mainImg"
          onClick={() => handleListImgClick('blooddes')}
        >
          {listImg === 'blooddes' ? (
            <img className="main-img" src={BloodDes} alt="" />
          ) : (
            <img className="main-img" src={Blood} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainImg;
