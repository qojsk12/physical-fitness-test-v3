// components/List.tsx

import React from 'react';
import ListItem from './ListItem';
import {Item} from '../types';
import {PhysicalListDes} from '../styles/styled-components';

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({items}) => {
  return (
    <PhysicalListDes>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </PhysicalListDes>
  );
};

export default List;
