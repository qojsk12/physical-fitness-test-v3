import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface ImageSliderProps {
  images: string[];
}

// 이미지 슬라이더 컨테이너 스타일
const SliderContainer = styled.div`
  width: 100%;
  max-width: 566px;
  height: 100%;
  .slick-dots {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: rgb(221, 255, 0);
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #bcbbbb;
    opacity: 1;
  }
`;

// 슬라이드 내용 스타일
const SliderContent = styled.div`
  border-radius: 10px;
  max-height: 800px;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ImageSlider({images}: ImageSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SliderContent key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SliderContent>
        ))}
      </Slider>
    </SliderContainer>
  );
}

// 흩어지는 애니메이션 적용 코드

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';

// interface ImageSliderProps {
//   images: string[];
//   onFinish: () => void; // 콜백 추가
//   visible: boolean; // visibility prop 추가
// }

// const SliderContainer = styled.div<{visible: boolean}>`
//   width: 100%;
//   max-width: 566px;
//   height: 100%;
//   display: ${({visible}) =>
//     visible ? 'block' : 'none'}; // visibility에 따라 조건부 스타일
// `;

// const SliderContent = styled.div`
//   border-radius: 10px;
//   max-height: 800px;
//   height: 100%;
//   overflow: hidden;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// export default function ImageSlider({
//   images,
//   onFinish,
//   visible,
// }: ImageSliderProps) {
//   const settings = {
//     dots: true,
//     infinite: false, // 무한 반복 비활성화
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // 슬라이드 간격 설정
//     afterChange: (current: number) => {
//       if (current === images.length - 1) {
//         onFinish(); // 마지막 슬라이드가 끝나면 onFinish 호출
//       }
//     },
//   };

//   return (
//     <SliderContainer visible={visible}>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <SliderContent key={index}>
//             <img src={image} alt={`Slide ${index}`} />
//           </SliderContent>
//         ))}
//       </Slider>
//     </SliderContainer>
//   );
// }
