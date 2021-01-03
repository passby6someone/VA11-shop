import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import './ItemContent.css';

function ItemContent(): JSX.Element {
  return (
    <article>
      <section className="ItemContent-section">
        <header>
          <h2>TITLE</h2>
        </header>
        <main>
          <p>
            来空间和官方官方
          </p>
        </main>
        <footer className="ItemContent-footer-container">
          <div>11-12</div>
          <div className="ItemContent-dislikeButton">
            <FrownOutlined />
            <div>&nbsp;不喜欢</div>
          </div>
        </footer>
      </section>
      <hr />
    </article>
  );
}

export default ItemContent;
