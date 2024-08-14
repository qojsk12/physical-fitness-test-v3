// components/ListItem.tsx

import React, {useState} from 'react';
import '../styles/ListItem.css';
import {Item} from '../types';
import Modal from './Modal';
import ModalContent from './ModalContent';

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
    <div className="physical__list-item" onClick={openModal}>
      <div className="img__box">
        <video className="gif-img" controlsList="nofullscreen" controls muted>
          <source src={item.videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="des__box">
        <div className="img__description">종목</div>
        <div className="img__description">{item.title}</div>
        <div className="img__description">{item.gradingMethod}</div>
        <div className="img__description">{item.description}</div>
        <div className="img__description span">{item.duration}</div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent item={item} />
      </Modal>
    </div>
  );
};

export default ListItem;
