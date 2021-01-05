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
          selected={curTab === TabName.index}
          onPress={() => {
            setCurTab(TabName.index);
            onClickTab(TabName.index);
          }}
        >
          <IndexPage />
        </TabBar.Item>
        <TabBar.Item
          title="消息"
          key="Message"
          icon={<BorderOutlined />}
          selectedIcon={<BookFilled />}
          selected={curTab === TabName.message}
          onPress={() => {
            setCurTab(TabName.message);
            onClickTab(TabName.message);
          }}
        >
          <div>首页</div>
        </TabBar.Item>
        <TabBar.Item
          title="我"
          key="Me"
          icon={<BorderOutlined />}
          selectedIcon={<BookFilled />}
          selected={curTab === TabName.me}
          onPress={() => {
            setCurTab(TabName.me);
            onClickTab(TabName.me);
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
