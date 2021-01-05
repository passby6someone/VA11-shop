import React from 'react';
import { Tabs } from 'antd-mobile';

import MasonryContainer from '@component/MasonryContainer/MasonryContainer';
import MasonryItem from '@component/MasonryItem/MasonryItem';
import Header from './MeHeader/MeHeader';
import './MePage.css';

const tabs = [
  { title: '笔记', sub: '1' },
  { title: '收藏', sub: '2' },
];

function MePage():JSX.Element {
  return (
    <article className="MePage-article">
      <Header />
      <main className="MePage-main">
        <Tabs tabs={tabs}>
          <div>
            <MasonryContainer>
              <MasonryItem />
            </MasonryContainer>
          </div>
          <div>
            <MasonryContainer>
              <MasonryItem />
              <MasonryItem />
            </MasonryContainer>
          </div>
        </Tabs>
      </main>
    </article>
  );
}

export default MePage;
