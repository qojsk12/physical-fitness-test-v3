// import React, {useState} from 'react';
// import {Item} from '../types';
// import Modal from './Modal';
// import ModalContent from './ModalContent';
// import {
//   DesBox,
//   ImgBox,
//   ImgDescription,
//   PhysicalListItem,
//   Video,
// } from '../styles/styled-components';

// interface ListItemProps {
//   item: Item;
// }

// const ListItem: React.FC<ListItemProps> = ({item}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     console.log('클릭');
//     setIsModalOpen(false);
//   };
//   return (
//     <PhysicalListItem onClick={openModal}>
//       <ImgBox>
//         <Video controlsList="nofullscreen" controls muted>
//           <source src={item.videoSrc} type="video/mp4" />
//         </Video>
//       </ImgBox>
//       <DesBox>
//         <ImgDescription>종목 : {item.title}</ImgDescription>
//         <ImgDescription>
//           {item.gradingMethod} : {item.description}
//         </ImgDescription>
//         <ImgDescription>{item.duration}</ImgDescription>
//       </DesBox>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <ModalContent item={item} />
//       </Modal>
//     </PhysicalListItem>
//   );
// };

// export default ListItem;

import React, {useState, useRef, useEffect} from 'react';
import {Item} from '../types';
import Modal from './Modal';
import ModalContent from './ModalContent';
import {
  Btn,
  DesBox,
  ImgBox,
  ImgDescription,
  PhysicalListItem,
} from '../styles/styled-components';
import styled from 'styled-components';

// 비디오 스타일을 조정
const CustomVideo = styled.video`
  position: relative;
  width: 100%; // 비디오가 부모 요소에 맞춰지도록
  height: 100%; // 비디오가 부모 요소에 맞춰지도록
`;

const CustomPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px; // 더 큰 버튼
  height: 70px; // 더 큰 버튼
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10; // 비디오 위에 표시되도록
  &:before {
    content: '▶';
    font-size: 70px;
    color: white;
    text-shadow: 2px 2px 4px black; // 가독성 위해 그림자 추가
  }
`;

interface ListItemProps {
  item: Item;
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('클릭');
    setIsModalOpen(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // 비디오가 로드되면 muted 속성 설정
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <PhysicalListItem>
      <ImgBox>
        <CustomVideo ref={videoRef} onClick={togglePlay} muted>
          <source src={item.videoSrc} type="video/mp4" />
          {!isPlaying && <CustomPlayButton onClick={togglePlay} />}
        </CustomVideo>
      </ImgBox>
      <DesBox>
        <ImgDescription>종목 : {item.title}</ImgDescription>
        <ImgDescription>
          {item.gradingMethod} : {item.description}
        </ImgDescription>
        <ImgDescription onClick={openModal}>
          <Btn>자세히 보기</Btn>
        </ImgDescription>
      </DesBox>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent item={item} />
      </Modal>
    </PhysicalListItem>
  );
};

export default ListItem;
