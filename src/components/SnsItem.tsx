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
