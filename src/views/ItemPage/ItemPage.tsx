import React from 'react';

import ItemNav from './ItemNav/ItemNav';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import ItemContent from './ItemContent/ItemContent';
import ItemOptBar from './ItemOptBar/ItemOptBar';
import ItemComment from './ItemComment/ItemComment';

function ItemPage(): JSX.Element {
  return (
    <div>
      <ItemNav />
      <ItemCarousel />
      <ItemContent />
      <ItemComment />
      <ItemOptBar />
    </div>
  );
}

export default ItemPage;
