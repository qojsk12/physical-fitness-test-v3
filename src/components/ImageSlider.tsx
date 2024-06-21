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
  box-shadow: 3px 2px 8px 4px #898888;
  width: 1400px;
  height: 800px;
  border: 0px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin-top: 30px;
  .slick-dots {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 10px;
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
    font-size: 20px;
    color: #bcbbbb;
    opacity: 1;
  }
`;

// 슬라이드 내용 스타일
const SliderContent = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    autoplaySpeed: 10000,
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
