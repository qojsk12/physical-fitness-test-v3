import ImageSlider from '../components/ImageSlider';
import X4 from '../assets/images/001.png';
import X3 from '../assets/images/002.png';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';
import Background from '../assets/images/005.png';

const imageUrls = [X4, X3];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 1px 3px 10px 3px #c1c1c1;
  background-image: url(${Background});
  background-size: cover;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 400px;
  padding: 30px;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

export default function Home() {
  return (
    <Wrapper>
      <SnsBox>
        <Title>시흥체력인증센터 소식 받기</Title>
        <SnsItem />
      </SnsBox>
      <ImageSlider images={imageUrls} />
    </Wrapper>
  );
}
