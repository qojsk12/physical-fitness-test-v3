import ImageSlider from '../components/ImageSlider';
import Event2 from '../assets/images/스포츠인센티브-포스터.jpg';
import Event3 from '../assets/images/스포츠활동장려 공모전.png';
import Event4 from '../assets/images/체력숫자 홍보 포스터(메인).jpg';
import Event5 from '../assets/images/시흥하프마라톤홍보_포스터.jpg';
import Event6 from '../assets/images/헬스업 프로모션 안내.jpg';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';
import Calender from '../components/Calender';
import Instar from '../assets/images/ins.png';
import Naver from '../assets/images/naver.png';
import Kakao from '../assets/images/kaka.png';

const imageUrls = [Event2, Event3, Event4, Event5, Event6];
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
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
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

// import { motion } from 'framer-motion';
// import ImageSlider from '../components/ImageSlider';
// import Event2 from '../assets/images/스포츠인센티브-포스터.jpg';
// import Event3 from '../assets/images/스포츠활동장려 공모전.png';
// import Event4 from '../assets/images/체력숫자 홍보 포스터(메인).jpg';
// import Event5 from '../assets/images/시흥하프마라톤홍보_포스터.jpg';
// import Event6 from '../assets/images/헬스업 프로모션 안내.jpg';
// import styled from 'styled-components';
// import SnsItem from '../components/SnsItem';
// import Calender from '../components/Calender';
// import Instar from '../assets/images/ins.png';
// import Naver from '../assets/images/naver.png';
// import Kakao from '../assets/images/kaka.png';

// const imageUrls = [Event2, Event3, Event4, Event5, Event6];
// const imageUrls2 = [Instar, Naver, Kakao];

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

// const SnsBox = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 5px;
//   padding: 20px 10px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Title = styled.div`
//   text-align: center;
//   margin-bottom: 10px;
//   line-height: 1.6;
// `;

// const Home = () => {
//   return (
//     <Wrapper>
//       <SnsBox
//         initial={{ opacity: 0, x: -100 }} // 애니메이션 시작 상태
//         animate={{ opacity: 1, x: 0 }} // 애니메이션 끝 상태
//         transition={{ delay: 0.5, duration: 0.8 }} // 지연 시간 및 애니메이션 지속 시간
//       >
//         <Title>
//           시흥체력인증센터 <br /> 소식 받기
//         </Title>
//         <SnsItem images={imageUrls2} />
//       </SnsBox>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//       >
//         <Calender />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 2, duration: 0.8 }}
//       >
//         <ImageSlider images={imageUrls} />
//       </motion.div>
//     </Wrapper>
//   );
// };

// export default Home;
