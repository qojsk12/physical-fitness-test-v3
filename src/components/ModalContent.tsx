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
  width: 100%;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;

const Title = styled.div``;

const Description = styled.div``;

const Duration = styled.div``;

interface ModalContentProps {
  item: Item;
}

export default function ModalContent({item}: ModalContentProps) {
  return (
    <Wrapper>
      <VideoBox>
        <Video controls muted>
          <source src={item.videoSrc} type="video/mp4" />
        </Video>
      </VideoBox>
      <DesBox>
        <Title>종목: {item.title}</Title>
        <Description>
          {item.gradingMethod}: {item.description}
        </Description>
        <Duration>{item.duration}</Duration>
      </DesBox>
    </Wrapper>
  );
}
