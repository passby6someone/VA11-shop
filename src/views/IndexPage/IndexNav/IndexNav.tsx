import React from 'react';
import { Tabs, NavBar, Icon } from 'antd-mobile';

import IndexItems from '../IndexItems/IndexItems';
import { TabBarPropsType } from './TabBarPropsType';

const tabs = [
  { title: '关注', sub: '1' },
  { title: '发现', sub: '2' },
  { title: '本地', sub: '3' },
];

function renderTabBar(props: TabBarPropsType) {
  const {
    goToTab,
    tabs: DefaultTabBarTab,
    activeTab,
    animated,
    tabBarPosition,
  } = props;

  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      ]}
    >
      <Tabs.DefaultTabBar
        goToTab={goToTab}
        tabs={DefaultTabBarTab}
        activeTab={activeTab}
        animated={animated}
        tabBarPosition={tabBarPosition}
        renderTab={(tab) => <div style={{ margin: '0px 10px' }}>{tab.title}</div>}
      />
    </NavBar>
  );
}

const IndexNav = (): JSX.Element => (
  <Tabs
    tabs={tabs}
    initialPage={1}
    renderTabBar={renderTabBar}
    onChange={(tab, index) => { console.log('onChange', index, tab); }}
    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
  >
    <IndexItems />
    <IndexItems />
    <IndexItems />
  </Tabs>
);

export default IndexNav;
