import React from 'react';
import { NavBar } from 'antd-mobile';
import { MessageOutlined } from '@ant-design/icons';

import './MessagePageNav.css';

function MessagePageNav(): JSX.Element {
  return (
    <nav className="MessagePage-nav">
      <NavBar
        mode="light"
        rightContent={<MessageOutlined style={{ color: '#000' }} />}
      >
        消息
      </NavBar>
    </nav>
  );
}

export default MessagePageNav;
