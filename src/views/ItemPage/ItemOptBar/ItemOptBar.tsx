import React from 'react';
import {
  EditOutlined,
  HeartOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons';

function ItemOptBar(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', position: 'fixed', left: '0px', right: '0px', bottom: '0px', zIndex: 10, borderTop: '1px solid rgba(0.9, 0.9, 0.9, 0.1)', backgroundColor: 'white',
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
  );
}

export default ItemOptBar;
