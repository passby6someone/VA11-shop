import React from 'react';
import { Tabs } from 'antd-mobile';

import { MasonryContainer as Container, MasonryItem as Item } from '@component/Masonry/Masonry';
import UserInfo from './UserInfo/UserInfo';
import './MePage.css';

const tabs = [
  { title: '笔记', sub: '1' },
  { title: '收藏', sub: '2' },
];

function MePage():JSX.Element {
  return (
    <article className="MePage-article">
      <UserInfo />
      <main className="MePage-main">
        <Tabs tabs={tabs}>
          <div>
            <Container>
              <Item />
            </Container>
          </div>
          <div>
            <Container>
              <Item />
              <Item />
            </Container>
          </div>
        </Tabs>
      </main>
    </article>
  );
}

export default MePage;
