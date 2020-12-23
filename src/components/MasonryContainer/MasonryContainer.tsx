import React, { ReactNode } from 'react';

import './MasonryContainer.css';

interface Props {
  children: ReactNode
}

function MasonryContainer(props: Props):JSX.Element {
  const { children } = props;
  return (
    <div className="MasonryContainer">
      {children}
    </div>
  );
}

export default MasonryContainer;
