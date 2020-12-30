import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import {
  BorderOutlined,
  BookFilled,
} from '@ant-design/icons';
import loadable from '@loadable/component';

import Loading from '@component/Loading';

const IndexNav = loadable(() => import('../IndexNav/IndexTabs'), {
  fallback: <Loading />,
});

function IndexTabBar(): JSX.Element {
  const [curTab, setCurTab] = useState('Index');

  return (
    <TabBar>
      <TabBar.Item
        title="首页"
        key="Index"
        icon={<BorderOutlined />}
        selectedIcon={<BookFilled />}
        selected={curTab === 'Index'}
        onPress={() => setCurTab('Index')}
      >
        <IndexNav />
      </TabBar.Item>
      <TabBar.Item
        title="消息"
        key="Message"
        icon={<BorderOutlined />}
        selectedIcon={<BookFilled />}
        selected={curTab === 'Message'}
        onPress={() => setCurTab('Message')}
      >
        <div>首页</div>
      </TabBar.Item>
      <TabBar.Item
        title="我"
        key="Me"
        icon={<BorderOutlined />}
        selectedIcon={<BookFilled />}
        selected={curTab === 'Me'}
        onPress={() => setCurTab('Me')}
      >
        <div>首页</div>
      </TabBar.Item>
    </TabBar>
  );
}

export default IndexTabBar;
