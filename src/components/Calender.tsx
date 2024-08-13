import styled from 'styled-components';
import MCalender from '../assets/images/calendar.png';

const ImgBox = styled.div`
  /* box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2); */
  display: grid;
  width: 1000px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Calender() {
  return (
    <ImgBox>
      <img src={MCalender} alt="준비중" />
    </ImgBox>
  );
}
