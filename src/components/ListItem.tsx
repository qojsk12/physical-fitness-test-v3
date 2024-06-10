// components/ListItem.tsx

import React from 'react';
import '../styles/ListItem.css';
import {Item} from '../types';

interface ListItemProps {
  item: Item;
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  return (
    <div className="physical__list-item">
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
    </div>
  );
};

export default ListItem;
