// src/ImageSlider.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface ImageSliderProps {
  images: string[];
}

// 이미지 슬라이더 컨테이너 스타일
const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// 슬라이드 내용 스타일
const SliderContent = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export default function ImageSlider({images}: ImageSliderProps) {
  return (
    <SliderContainer>
      {images.map((image, index) => (
        <SliderContent key={index}>
          <img src={image} alt="준비중" />
        </SliderContent>
      ))}
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 566px;
  border: none;
  height: 100%;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  .slick-dots {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 5px;
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
    object-fit: cover;
    box-sizing: border-box;
  }
`;
