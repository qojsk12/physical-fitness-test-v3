import {useState} from 'react';
import styled, {css} from 'styled-components';
import BloodDes from '../assets/images/BloodDes.jpg';
import Blood from '../assets/images/Blood.png';
import {
  fadeIn,
  ImgBox,
  ImgMain,
  PhysicalListDes,
  PhysicalListItem,
} from '../styles/styled-components';

// ImgBox 확장: 애니메이션 적용
const AnimatedImgMain = styled(ImgMain)<{isAnimating: boolean}>`
  ${({isAnimating}) =>
    isAnimating &&
    css`
      animation: ${fadeIn} 0.4s ease-in-out;
    `}
`;

interface MainImgProps {
  listImg: string | null;
  handleListImgClick: (item: string) => void;
}

export default function MainImg({listImg, handleListImgClick}: MainImgProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (item: string) => {
    setIsAnimating(true); // 애니메이션 트리거
    handleListImgClick(item);

    // 애니메이션이 끝난 후 상태 초기화
    setTimeout(() => setIsAnimating(false), 500); // 애니메이션 시간과 동일
  };

  return (
    <PhysicalListDes>
      <PhysicalListItem className="main">
        <ImgBox className="mainImg" onClick={() => handleClick('blooddes')}>
          <AnimatedImgMain
            src={listImg === 'blooddes' ? BloodDes : Blood}
            alt=""
            isAnimating={isAnimating}
          />
        </ImgBox>
      </PhysicalListItem>
    </PhysicalListDes>
  );
}
