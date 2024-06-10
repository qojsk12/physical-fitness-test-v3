import ImageSlider from '../components/ImageSlider';
import X4 from '../assets/images/x4.png';
import styled from 'styled-components';
import SnsItem from '../components/SnsItem';

const imageUrls = [X4];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 1px 3px 10px 3px #c1c1c1;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
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
        <Title>SNS로 소식 받기</Title>
        <SnsItem />
      </SnsBox>
      <ImageSlider images={imageUrls} />
    </Wrapper>
  );
}
