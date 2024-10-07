import styled from 'styled-components';
import MCalender from '../assets/images/calendar.jpg';

const ImgBox = styled.div`
  /* box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2); */
  display: grid;
  max-width: 1000px;
  max-height: 800px;
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

//흩어지는 애니메이션 적용 코드

// import styled, {keyframes} from 'styled-components';
// import MCalender from '../assets/images/calendar.jpg';

// const ImgBox = styled.div<{
//   visible: boolean;
//   animationType: 'fadeIn' | 'crumble';
// }>`
//   display: grid;
//   max-width: 1000px;
//   max-height: 800px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   overflow: hidden;
//   opacity: ${({visible}) => (visible ? 1 : 0)};
//   transform: ${({visible}) => (visible ? 'translateY(0)' : 'translateY(20px)')};
//   animation: ${({animationType}) =>
//       animationType === 'fadeIn' ? fadeIn : crumble}
//     0.5s forwards;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const crumble = keyframes`
//   0% {
//     opacity: 1;
//     transform: translate(0, 0);
//   }
//   100% {
//     opacity: 0;
//     transform: translate(calc(10px * var(--x)), calc(-50px * var(--y)));
//     filter: blur(5px);
//   }
// `;

// interface CalenderProps {
//   visible: boolean; // required for visibility control
//   animationType: 'fadeIn' | 'crumble'; // required for animation control
// }

// export default function Calender({visible, animationType}: CalenderProps) {
//   return (
//     <ImgBox visible={visible} animationType={animationType}>
//       <img src={MCalender} alt="준비중" />
//     </ImgBox>
//   );
// }
