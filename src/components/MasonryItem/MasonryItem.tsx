import React from 'react';

import './MasonryItem.css';

function MasonryItem() {
  return (
    <div className="MasonryItem-container">
      <div className="item-thumbnail">
        <img src="http://ci.xiaohongshu.com/1ad778e5-53ac-4adf-c8ca-44b79fb845af?imageView2/2/w/540/format/jpg" alt="" />
      </div>
      <div className="item-title">
        啊实打实大苏打实打实大苏打啊大苏打实打实的
      </div>
      <div className="item-info">
        <div className="item-author">
          <div className="item-avatar">
            <img src="https://img.xiaohongshu.com/avatar/5f47e98ad13df00001da0669.jpg@80w_80h_90q_1e_1c_1x.jpg" alt="" />
          </div>
          <div className="item-name">name</div>
        </div>
        <div className="item-like">
          xin
        </div>
      </div>
    </div>
  );
}

export default MasonryItem;
