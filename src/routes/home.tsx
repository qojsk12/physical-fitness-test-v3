import ImageSlider from '../components/ImageSlider';
import Event1 from '../assets/images/체력왕포스터.jpg';
import Event2 from '../assets/images/스포츠인센티브-포스터.jpg';
import Event3 from '../assets/images/스포츠활동장려 공모전.png';
import Event4 from '../assets/images/체력숫자 홍보 포스터(메인).jpg';
import Event5 from '../assets/images/시흥하프마라톤홍보_포스터.png';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';
import Calender from '../components/Calender';
import Instar from '../assets/images/ins.png';
import Naver from '../assets/images/naver.png';
import Kakao from '../assets/images/kaka.png';

const imageUrls = [Event1, Event2, Event3, Event4, Event5];
const imageUrls2 = [Instar, Naver, Kakao];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 0px;
  border: none;
  border-radius: 5px;
  padding: 20px 10px;
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2); */
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.6;
`;

export default function Home() {
  return (
    <Wrapper>
      <Calender />
      <SnsBox>
        <Title>
          시흥체력인증센터 <br /> 소식 받기
        </Title>
        <SnsItem images={imageUrls2} />
      </SnsBox>
      <ImageSlider images={imageUrls} />
    </Wrapper>
  );
}
