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
  align-items: center;
  gap: 50px;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.6;
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
