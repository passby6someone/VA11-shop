import React from 'react';
import { Link } from 'react-router-dom';

import MasonryContainer from '@component/MasonryContainer/MasonryContainer';
import Item from '@component/MasonryItem/MasonryItem';

function IndexItems() {
  return (
    <div style={{ height: 'calc(100vh - 45px)', overflow: 'scroll' }}>
      <MasonryContainer>
        <Link to="/item"><Item /></Link>
        <Item />
        <Item />
        <Item />
        <Item />
      </MasonryContainer>
    </div>
  );
}

export default IndexItems;
