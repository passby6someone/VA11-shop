import React from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import {
  EditOutlined,
  HeartOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons';

function ItemPage(): JSX.Element {
  return (
    <>
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
      <div style={{ marginTop: '45px' }}>
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
      </div>
      <div style={{ padding: '0.2rem' }}>
        <h2>TITLE</h2>
        <p>
          来空间和官方官方
        </p>
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', color: 'rgba(127,127,127,0.5)', alignItems: 'center',
          }}
        >
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
      <hr />
      <div
        style={{
          display: 'flex', alignItems: 'center', position: 'fixed', left: '0px', right: '0px', bottom: '0px', zIndex: 10, borderTop: '1px solid rgba(0.9, 0.9, 0.9, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex', flex: '2', alignItems: 'center', borderRadius: '64px', padding: '0.15rem', backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.1)', margin: '0.15rem', color: 'rgba(0.9, 0.9, 0.9, 0.5)',
          }}
        >
          <EditOutlined style={{ fontSize: '0.45rem' }} />
          <span>说点什么...</span>
        </div>
        <div
          style={{
            display: 'flex', flex: '1', alignItems: 'center',
          }}
        >
          <HeartOutlined style={{ fontSize: '0.45rem' }} />
          <span style={{ paddingLeft: '0.05rem' }}>644</span>
        </div>
        <div
          style={{
            display: 'flex', flex: '1', alignItems: 'center',
          }}
        >
          <StarOutlined style={{ fontSize: '0.45rem' }} />
          <span style={{ paddingLeft: '0.05rem' }}>114</span>
        </div>
        <div
          style={{
            display: 'flex', flex: '1', alignItems: 'center',
          }}
        >
          <MessageOutlined style={{ fontSize: '0.45rem' }} />
          <span style={{ paddingLeft: '0.05rem' }}>146</span>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
