import React from 'react';

import './Comments.css';

export default function comments(): JSX.Element {
  return (
    <>
      <div className="ItemComment-commentitem-origin">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
          alt=""
          className="ItemComment-avatar-md"
        />
        <div className="ItemComment-commentitem-body">
          <div className="ItemComment-username">路过的甲同学</div>
          <div className="ItemComment-content">阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</div>
        </div>
      </div>
      <div className="ItemComment-commentitem-replycontainer">
        <div className="ItemComment-commentitem-replyitem">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
            alt=""
            className="ItemComment-avatar-sm"
          />
          <div className="ItemComment-commentitem-replybody">
            <div className="ItemComment-username">一只路过的甲同学</div>
            <div className="ItemComment-content">是滴！</div>
          </div>
        </div>
      </div>
      <div className="ItemComment-commentitem-replycontainer">
        <div className="ItemComment-commentitem-replyitem">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
            alt=""
            className="ItemComment-avatar-sm"
          />
          <div className="ItemComment-commentitem-replybody">
            <div className="ItemComment-username">一只路过的甲同学</div>
            <div className="ItemComment-content">是滴！</div>
          </div>
        </div>
      </div>
    </>
  );
}
