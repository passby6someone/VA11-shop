import React, { useState } from 'react';

import Item from '@component/MasonryItem/MasonryItem';

import './MasonryContainer.css';

interface Props {
  marginTop: string
}

class ScrollX {
  screenWidth: number;

  touchType: '' | 'scroll' | 'switch';

  initPageX: number;

  initPageY: number;

  scrollNum: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.touchType = '';
    this.initPageX = 0;
    this.initPageY = 0;
    this.scrollNum = 0;
  }

  init(e: React.TouchEvent<HTMLDivElement>) {
    const { pageX, pageY } = e.targetTouches[0];
    this.initPageX = pageX;
    this.initPageY = pageY;
  }

  isSwitch(e: React.TouchEvent<HTMLDivElement>) {
    e.preventDefault();
    if (this.touchType === '') {
      const { pageX, pageY } = e.targetTouches[0];
      if (Math.abs(pageX - this.initPageX) - Math.abs(pageY - this.initPageY) > 0) {
        this.touchType = 'switch';
      } else {
        this.touchType = 'scroll';
      }
    }
  }

  switchOpt(setLeft: React.Dispatch<React.SetStateAction<string>>)
    :(e: React.TouchEvent<HTMLDivElement>) => void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return (e: React.TouchEvent<HTMLDivElement>) => {
      if (self.touchType === 'scroll') {
        return;
      }
      const distance = e.changedTouches[0].pageX - self.initPageX;
      const range = self.screenWidth / 5;
      // console.log(distance, range);
      if (distance < 0 && distance < -range) {
        console.log('right', self.scrollNum * range);
        // const scrollWidth = Math.min(distance, range);
        // const scrollWidth = self.screenWidth + distance;
        setLeft(`-${self.scrollNum * self.screenWidth}px`);
        self.scrollNum += 1;
        setLeft(`-${self.scrollNum * self.screenWidth}px`);
      } else if (distance > 0 && distance > range) {
        console.log('left', self.scrollNum * range);
        // const scrollWidth = self.screenWidth - distance;
        setLeft(`-${self.scrollNum * self.screenWidth}px`);
        self.scrollNum -= 1;
        setLeft(`-${self.scrollNum * self.screenWidth}px`);
      } else {
        console.log('not match', self.scrollNum * range);
        setLeft(`-${self.scrollNum * self.screenWidth}px`);
      }
    };
  }
}

function MasonryContainer(props: Props):JSX.Element {
  const { marginTop } = props;
  const [left, setLeft] = useState('0vw');

  const scroll = new ScrollX();

  return (
    <div className="MasonryContainer">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default MasonryContainer;
