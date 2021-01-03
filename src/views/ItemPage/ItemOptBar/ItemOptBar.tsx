import React from 'react';
import {
  EditOutlined,
  HeartOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons';

import './itemOptBar.css';

function ItemOptBar(): JSX.Element {
  return (
    <div className="ItemOptBar-container">
      <div className="ItemOptBar-commentButton">
        <EditOutlined />
        <span>说点什么...</span>
      </div>
      <div className="ItemOptBar-optButton">
        <HeartOutlined />
        <span>644</span>
      </div>
      <div className="ItemOptBar-optButton">
        <StarOutlined />
        <span>114</span>
      </div>
      <div className="ItemOptBar-optButton">
        <MessageOutlined />
        <span>146</span>
      </div>
    </div>
  );
}

export default ItemOptBar;
