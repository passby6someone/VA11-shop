import React from 'react';
import { Link } from 'react-router-dom';

import { MasonryContainer as Container, MasonryItem as Item } from '@component/Masonry/Masonry';

import './IndexItems.css';

function IndexItems(): JSX.Element {
  return (
    <div className="IndexItems-container">
      <Container>
        <Link to="/item"><Item /></Link>
        <Link to="/item"><Item /></Link>
        <Link to="/item"><Item /></Link>
        <Link to="/item"><Item /></Link>
        <Link to="/item"><Item /></Link>
      </Container>
    </div>
  );
}

export default IndexItems;
