import styled from 'styled-components';
import SnsBox from '../assets/images/snsbox.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 250px;
    height: 650px;
  }
`;

export default function SnsItem() {
  return (
    <Wrapper>
      <img src={SnsBox} alt="준비중" />
    </Wrapper>
  );
}
