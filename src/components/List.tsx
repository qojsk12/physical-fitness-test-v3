// components/List.tsx

import React from 'react';
import ListItem from './ListItem';
import '../styles/List.css';
import {Item} from '../types';

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({items}) => {
  return (
    <div className="physical__list-des">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
