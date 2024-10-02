import BloodDes from '../assets/images/BloodDes.png';
import Blood from '../assets/images/Blood.png';
import '../styles/MainImg.css';
import {PhysicalListDes} from '../styles/styled-components';

interface MainImgProps {
  listImg: string | null;
  handleListImgClick: (item: string) => void;
}

export default function MainImg({listImg, handleListImgClick}: MainImgProps) {
  return (
    <PhysicalListDes>
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
    </PhysicalListDes>
  );
}
