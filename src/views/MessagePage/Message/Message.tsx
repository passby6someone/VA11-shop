import React from 'react';
import { Badge } from 'antd-mobile';

import './Message.css';

function Message(): JSX.Element {
  return (
    <div className="MessagePage-message-container">
      <figure className="MessagePage-user-figure">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
          alt="头像"
        />
      </figure>
      <div className="MessagePage-message-item">
        <div className="MessagePage-message-info">
          <div className="MessagePage-message-username">
            是你的草莓软糖
          </div>
          <div className="MessagePage-message-time">
            2020-14-12
          </div>
        </div>
        <div className="MessagePage-message-body">
          <div>
            ???
          </div>
          <div><Badge text={15} overflowCount={99} /></div>
        </div>
      </div>
    </div>
  );
}

export default Message;
