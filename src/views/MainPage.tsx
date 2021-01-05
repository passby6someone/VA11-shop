import React, { Dispatch, useState } from 'react';
import { TabBar } from 'antd-mobile';
import loadable from '@loadable/component';
import { connect } from 'react-redux';

import { Store } from '@store/store';
import { TabAction, TabName, changeTab } from '@actions/actions';
import {
  BorderOutlined,
  BookFilled,
} from '@ant-design/icons';

import Loading from '@component/Loading';

const IndexPage = loadable(() => import('./IndexPage/IndexPage'), {
  fallback: <Loading />,
});
const MessagePage = loadable(() => import('./MessagePage/MessagePage'), {
  fallback: <Loading />,
});
const MePage = loadable(() => import('./MePage/MePage'), {
  fallback: <Loading />,
});

const mapStateToProps = (state: Store) => ({
  tabName: state.tab.TabName,
});

const mapDispatchToProps = (dispatch: Dispatch<TabAction>) => ({
  onClickTab: (name: TabName) => {
    console.log(changeTab(name));
    dispatch(changeTab(name));
  },
});

interface Iprops {
  tabName: TabName,
  onClickTab: (name: TabName) => void
}

function IndexTabBar(props: Iprops): JSX.Element {
  const { tabName, onClickTab } = props;
  const [curTab, setCurTab] = useState(tabName);

  return (
    <div
      style={{
        height: '100vh', width: '100vw', overflow: 'scroll',
      }}
    >
      <TabBar>
        <TabBar.Item
          title="首页"
          key="Index"
          icon={<BorderOutlined />}
          selectedIcon={<BookFilled />}
          selected={curTab === 'index'}
          onPress={() => {
            setCurTab('index');
            onClickTab('index');
          }}
        >
          <IndexPage />
        </TabBar.Item>
        <TabBar.Item
          title="消息"
          key="Message"
          icon={<BorderOutlined />}
          selectedIcon={<BookFilled />}
          selected={curTab === 'message'}
          onPress={() => {
            setCurTab('message');
            onClickTab('message');
          }}
        >
          <MessagePage />
        </TabBar.Item>
        <TabBar.Item
          title="我"
          key="Me"
          icon={<BorderOutlined />}
          selectedIcon={<BookFilled />}
          selected={curTab === 'me'}
          onPress={() => {
            setCurTab('me');
            onClickTab('me');
          }}
        >
          <MePage />
        </TabBar.Item>
      </TabBar>
    </div>
  );
}

const IndexTabBarWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexTabBar);

export default IndexTabBarWithRedux;
