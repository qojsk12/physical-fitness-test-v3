import BloodDes from '../assets/images/BloodDes.png';
import Blood from '../assets/images/Blood.png';
import {
  ImgBox,
  ImgMain,
  PhysicalListDes,
  PhysicalListItem,
} from '../styles/styled-components';

interface MainImgProps {
  listImg: string | null;
  handleListImgClick: (item: string) => void;
}

export default function MainImg({listImg, handleListImgClick}: MainImgProps) {
  return (
    <PhysicalListDes>
      <PhysicalListItem className="main">
        <ImgBox
          className="mainImg"
          onClick={() => handleListImgClick('blooddes')}
        >
          {listImg === 'blooddes' ? (
            <ImgMain src={BloodDes} alt="" />
          ) : (
            <ImgMain src={Blood} alt="" />
          )}
        </ImgBox>
      </PhysicalListItem>
    </PhysicalListDes>
  );
}
