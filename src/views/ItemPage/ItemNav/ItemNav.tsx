import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

import './ItemNav.css';

function ItemNav(): JSX.Element {
  return (
    <div className="ItemNav-nav">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => window.history.back()}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>
    </div>
  );
}

export default ItemNav;
