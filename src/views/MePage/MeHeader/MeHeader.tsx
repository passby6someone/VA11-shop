import React from 'react';
import { Tag } from 'antd-mobile';

import './MeHeader.css';

function MeHeader(): JSX.Element {
  return (
    <header className="MePage-header">
      <section className="MePage-figure-container">
        <figure
          className="MePage-figure"
        >
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
            alt="头像"
          />
        </figure>
        <figcaption>
          <div>路过的甲同学</div>
          <div>id： 945879305</div>
          <div><Tag small>♂</Tag></div>
        </figcaption>
      </section>
      <section className="MePage-userStateBar">
        <div className="MePage-userState-container">
          <div>
            <span>1</span>
            <span style={{ fontSize: '12px' }}>关注</span>
          </div>
          <div>
            <span>1</span>
            <span style={{ fontSize: '12px' }}>粉丝</span>
          </div>
        </div>
        <div className="MePage-editState-container">
          <div className="MePage-editState-button">
            <span>编辑资料</span>
          </div>
        </div>
      </section>
    </header>
  );
}

export default MeHeader;
