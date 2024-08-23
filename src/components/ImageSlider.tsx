// src/ImageSlider.tsx
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
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
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
