import React from 'react';
import { Tag, Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';

const tabs = [
  { title: '笔记', sub: '1' },
  { title: '收藏', sub: '2' },
];

function MePage():JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 50px)' }}>
      <div style={{ width: '100vw', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            borderRadius: '100%', overflow: 'hidden', border: '1px solid #888', margin: '0.5rem 0.5rem',
          }}
        >
          <img
            style={{ width: '1.5rem', height: '1.5rem' }}
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F197494807%2Fpatches-frownface-gold.jpg%3Fauto%3Dformat%26fit%3Dmax%26h%3D600%26w%3D600&refer=http%3A%2F%2Fassets.bigcartel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611974451&t=8c340935d9fb8421f8ba84cf13229073"
            alt=""
          />
        </div>
        <div style={{}}>
          <div>路过的甲同学</div>
          <div>id： 945879305</div>
          <div><Tag small>♂</Tag></div>
        </div>
      </div>
      <div
        style={{
          display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', padding: '0px 0.5rem', alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span>1</span>
            <span style={{ fontSize: '12px' }}>关注</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span>1</span>
            <span style={{ fontSize: '12px' }}>粉丝</span>
          </div>
        </div>
        <div style={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              border: '1px solid #888', borderRadius: '64px', padding: '5px 10px', fontSize: '12px',
            }}
          >
            <span>编辑资料</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'scroll' }}>
        <Tabs tabs={tabs}>
          <div>
            <Link to="/item">1</Link>
          </div>
          <div>1</div>
        </Tabs>
      </div>
    </div>
  );
}

export default MePage;
