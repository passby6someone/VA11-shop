import React from 'react';
import { Link } from 'react-router-dom';

import MasonryContainer from '@component/MasonryContainer/MasonryContainer';
import Item from '@component/MasonryItem/MasonryItem';

import './IndexItems.css';

function IndexItems(): JSX.Element {
  return (
    <div className="IndexItems-container">
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
