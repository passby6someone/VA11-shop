import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

function ItemNav(): JSX.Element {
  return (
    <div
      style={{
        position: 'fixed', left: '0px', right: '0px', top: '0px', zIndex: 10,
      }}
    >
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
