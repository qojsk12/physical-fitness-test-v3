import styled from 'styled-components';
import {Item} from '../types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  width: 100%;
`;

const Description = styled.div`
  margin-bottom: 15px;
  color: #555;
  line-height: 1.6;
  font-size: 30px;
  width: 100%;
  height: 100%;
`;

const Duration = styled.div`
  font-size: 22px;
  color: #777;
  margin-top: auto;
  border-top: 1px solid #ddd;
  width: 100%;
  padding-top: 10px;
`;

interface ModalContentProps {
  item: Item;
}

export default function ModalContent({item}: ModalContentProps) {
  return (
    <Wrapper>
      <VideoBox>
        <Video autoPlay controls muted>
          <source src={item.videoSrc} type="video/mp4" />
        </Video>
      </VideoBox>
      <DesBox>
        <Title>종목: {item.title}</Title>
        <Description>
          {Array.isArray(item.duration) ? (
            item.duration.map((durationItem, index) => (
              <div key={index}>{durationItem}</div>
            ))
          ) : (
            <div>{item.duration}</div>
          )}
        </Description>
        <Duration>{item.description}</Duration>
      </DesBox>
    </Wrapper>
  );
}
