import styled from 'styled-components';

interface ImageProps {
  images: string[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
`;

const ImgContent = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export default function SnsItem({images}: ImageProps) {
  return (
    <Wrapper>
      {images.map((image, index) => (
        <ImgContent key={index}>
          <img src={image} alt="준비중" />
        </ImgContent>
      ))}
    </Wrapper>
  );
}

// 흩어지는 애니메이션 적용 코드

// import styled, {keyframes} from 'styled-components';

// interface ImageProps {
//   images: string[];
//   visible: boolean; // 추가된 부분
//   animationType: 'fadeIn' | 'crumble'; // 추가된 부분
// }

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

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   flex-direction: column;
//   gap: 20px;
// `;

// const ImgContent = styled.div<{animationType: 'fadeIn' | 'crumble'}>`
//   animation: ${({animationType}) =>
//       animationType === 'fadeIn' ? fadeIn : crumble}
//     0.5s ease forwards;

//   img {
//     width: 100px;
//     height: 100px;
//     object-fit: cover;
//   }
// `;

// export default function SnsItem({images, visible, animationType}: ImageProps) {
//   return (
//     <Wrapper>
//       {images.map((image, index) => (
//         <ImgContent
//           key={index}
//           animationType={animationType}
//           style={{opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease'}}
//         >
//           <img src={image} alt="준비중" />
//         </ImgContent>
//       ))}
//     </Wrapper>
//   );
// }
