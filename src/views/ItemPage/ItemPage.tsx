import React from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';

function ItemPage(): JSX.Element {
  return (
    <>
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
      <Carousel
        autoplay={false}
        dots
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'].map((val) => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
      <div style={{ padding: '0.2rem' }}>
        <h2>TITLE</h2>
        <p>FGHKJHFHJKLKJHGFGHJK立刻脚后跟返还借款立刻脚后跟法国海军看脚后跟法国红酒看来看见换个风格和健康尽快离开就的法国红酒看来空间和官方</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(127,127,127,0.5)' }}>
          <div>11-12</div>
          <div
            style={{
              display: 'flex', alignItems: 'center', border: '1px solid', borderRadius: '64px', padding: '0.1rem',
            }}
          >
            <Icon type="cross-circle" size="xs" />
            <div style={{ verticalAlign: 'middle' }}>&nbsp;不喜欢</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
