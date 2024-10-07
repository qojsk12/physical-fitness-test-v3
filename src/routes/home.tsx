import ImageSlider from '../components/ImageSlider';
import Event4 from '../assets/images/체력숫자 홍보 포스터(메인).jpg';
import Event1 from '../assets/images/건강체력기준 포스터.jpg';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';
import Calender from '../components/Calender';
import Instar from '../assets/images/ins.png';
import Naver from '../assets/images/naver.png';
import Kakao from '../assets/images/kaka.png';

const imageUrls = [Event1, Event4];
const imageUrls2 = [Instar, Naver, Kakao];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  } */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <SnsBox>
        <Title>
          시흥체력인증센터 <br /> 소식 받기
        </Title>
        <SnsItem images={imageUrls2} />
      </SnsBox>
      <Calender />
      <ImageSlider images={imageUrls} />
    </Wrapper>
  );
}

// 흩어지는 애니메이션 적용 코드

// import {useEffect, useState} from 'react';
// import ImageSlider from '../components/ImageSlider';
// import Event4 from '../assets/images/체력숫자 홍보 포스터(메인).jpg';
// import Event1 from '../assets/images/스포츠인센티브-포스터.jpg';
// import styled from 'styled-components';
// import SnsItem from '../components/SnsItem';
// import Calender from '../components/Calender';
// import Instar from '../assets/images/ins.png';
// import Naver from '../assets/images/naver.png';
// import Kakao from '../assets/images/kaka.png';

// const imageUrls = [Event1, Event4];
// const imageUrls2 = [Instar, Naver, Kakao];
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 40px;
//   padding: 20px;
//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 20px;
//   }
// `;

// interface SnsBoxProps {
//   visible: boolean;
//   animationType: 'fadeIn' | 'crumble';
// }

// const SnsBox = styled.div<SnsBoxProps>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 10px;
//   padding: 20px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   opacity: ${({visible}) => (visible ? 1 : 0)};
//   transform: ${({visible}) => (visible ? 'translateY(0)' : 'translateY(20px)')};
//   animation: ${({animationType}) =>
//     animationType === 'fadeIn'
//       ? 'fadeIn 0.5s ease-in'
//       : 'crumble 0.5s forwards'};

//   @keyframes crumble {
//     0% {
//       opacity: 1;
//       transform: translate(0, 0);
//     }
//     100% {
//       opacity: 0;
//       transform: translate(calc(10px * var(--x)), calc(-50px * var(--y)));
//       filter: blur(5px);
//     }
//   }

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Title = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #333;
//   text-align: center;
//   margin-bottom: 15px;
//   line-height: 1.5;
//   @media screen and (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// export default function Home() {
//   const [visibleIndex, setVisibleIndex] = useState(0);
//   const [animationType, setAnimationType] = useState<'fadeIn' | 'crumble'>(
//     'fadeIn'
//   );
//   const components = ['sns', 'calendar', 'slider'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimationType('crumble'); // 사라질 때 애니메이션
//       setTimeout(() => {
//         setVisibleIndex((prevIndex) => (prevIndex + 1) % components.length);
//         setAnimationType('fadeIn'); // 나타날 때 애니메이션
//       }, 500); // 애니메이션이 끝나는 시간과 동일하게 설정
//     }, 3000); // 각 컴포넌트가 3초 간격으로 변경

//     return () => clearInterval(interval);
//   }, [components.length]);

//   const handleSliderFinish = () => {
//     setVisibleIndex(0); // ImageSlider가 끝났을 때 첫 번째 컴포넌트로 돌아갑니다.
//     setAnimationType('fadeIn'); // 다시 나타날 때 애니메이션
//   };

//   return (
//     <Wrapper>
//       {visibleIndex === 0 && (
//         <SnsBox visible={visibleIndex === 0} animationType={animationType}>
//           <Title>
//             시흥체력인증센터 <br /> 소식 받기
//           </Title>
//           <SnsItem
//             images={imageUrls2}
//             visible={visibleIndex === 0}
//             animationType={animationType}
//           />
//         </SnsBox>
//       )}
//       {visibleIndex === 1 && (
//         <Calender visible={visibleIndex === 1} animationType={animationType} />
//       )}
//       {visibleIndex === 2 && (
//         <ImageSlider
//           images={imageUrls}
//           onFinish={handleSliderFinish} // 콜백 추가
//           visible={visibleIndex === 2}
//         />
//       )}
//     </Wrapper>
//   );
// }
