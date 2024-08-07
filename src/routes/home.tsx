import ImageSlider from "../components/ImageSlider";
import Event from "../assets/images/001.png";
import Calender from "../assets/images/calendar.png";
import styled from "styled-components";
import SnsItem from "../components/SnsItem";

const imageUrls = [Event, Calender];

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
`~`