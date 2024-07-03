import ImageSlider from '../components/ImageSlider';
import X3 from '../assets/images/002.png';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';

const imageUrls = [X3];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

export default function Home() {
  return (
    <Wrapper>
      <ImageSlider images={imageUrls} />
      <SnsBox>
        <Title>시흥체력인증센터 소식 받기</Title>
        <SnsItem />
      </SnsBox>
    </Wrapper>
  );
}
