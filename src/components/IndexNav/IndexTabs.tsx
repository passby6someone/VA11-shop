import React from 'react';
import { Tabs, NavBar, Icon } from 'antd-mobile';

import MasonryContainer from '@component/MasonryContainer/MasonryContainer';

const tabs = [
  { title: '关注', sub: '1' },
  { title: '发现', sub: '2' },
  { title: '本地', sub: '3' },
];

interface Tab {
  key?: string,
  title: string,
  [key: string]: string
}

interface TabBarPropsType {
  /** call this function to switch tab */
  goToTab: (index: number) => void;
  /** tabs data */
  tabs: Tab[];
  /** current active tab */
  activeTab: number;
  /** use animate | default: true */
  animated: boolean;
  /** render the tab of tabbar */
  renderTab?: (tab: Tab) => React.ReactNode;
  /** render the underline of tabbar */
  renderUnderline?: (style: React.CSSProperties | undefined) => React.ReactNode;
  /** page size of tabbar's tab | default: 5 */
  page?: number;
  /** on tab click */
  onTabClick?: (tab: Tab, index: number) => void;
  /** tabBar's position | defualt: top */
  tabBarPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties | undefined;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties | any;
  instanceId: number;
}

function switchTabBar(props: TabBarPropsType) {
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

const IndexTabs = (): JSX.Element => (
  <Tabs
    tabs={tabs}
    initialPage={1}
    renderTabBar={switchTabBar}
    onChange={(tab, index) => { console.log('onChange', index, tab); }}
    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
  >
    <div style={{ height: 'calc(100vh - 45px)', overflow: 'scroll' }}>
      <MasonryContainer marginTop="45px" />
    </div>
    <div style={{ height: 'calc(100vh - 45px)', overflow: 'scroll' }}>
      <MasonryContainer marginTop="45px" />
    </div>
    <div style={{ height: 'calc(100vh - 45px)', overflow: 'scroll' }}>
      <MasonryContainer marginTop="45px" />
    </div>
  </Tabs>
);

export default IndexTabs;
