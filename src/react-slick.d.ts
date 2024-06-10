declare module 'react-slick' {
  import * as React from 'react';
  import {Item} from './types';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    [key: string]: Item;
  }

  export class Slider extends React.Component<Settings> {}
  export default Slider;
}
