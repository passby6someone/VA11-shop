export interface Tab {
  key?: string,
  title: string,
  [key: string]: string
}

export interface TabBarPropsType {
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
