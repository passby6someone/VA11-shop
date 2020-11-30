import React from 'react';

import IndexNav from '@component/IndexNav/IndexTabs';
import MasonryContainer from '@component/MasonryContainer/MasonryContainer';

import './IndexPage.css';

const tabs = [
  { title: 'first' },
  { title: 'second' },
  { title: 'third' },
];

function IndexPage():JSX.Element {
  return (
    <div>
      <div className="Nav">
        <IndexNav />
      </div>
    </div>
  );
}

export default IndexPage;
