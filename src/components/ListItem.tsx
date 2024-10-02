import React, {useState} from 'react';
import {Item} from '../types';
import Modal from './Modal';
import ModalContent from './ModalContent';
import {
  DesBox,
  ImgBox,
  ImgDescription,
  PhysicalListItem,
  Video,
} from '../styles/styled-components';

interface ListItemProps {
  item: Item;
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('클릭');
    setIsModalOpen(false);
  };
  return (
    <PhysicalListItem onClick={openModal}>
      <ImgBox>
        <Video controlsList="nofullscreen" controls muted>
          <source src={item.videoSrc} type="video/mp4" />
        </Video>
      </ImgBox>
      <DesBox>
        <ImgDescription>종목</ImgDescription>
        <ImgDescription>{item.title}</ImgDescription>
        <ImgDescription>{item.gradingMethod}</ImgDescription>
        <ImgDescription>{item.description}</ImgDescription>
        <ImgDescription className="span">{item.duration}</ImgDescription>
      </DesBox>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent item={item} />
      </Modal>
    </PhysicalListItem>
  );
};

export default ListItem;
