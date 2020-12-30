import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

function ItemContent(): JSX.Element {
  return (
    <div>
      <div style={{ padding: '0.2rem', marginBottom: '50px' }}>
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
            <FrownOutlined />
            <div style={{ verticalAlign: 'middle' }}>&nbsp;不喜欢</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ItemContent;
