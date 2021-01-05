import React, { ReactChild } from 'react';

import './MasonryContainer.css';

interface Props {
  children: ReactChild | ReactChild[]
}

function MasonryContainer(props: Props):JSX.Element {
  const { children } = props;
  const { map } = React.Children;

  return (
    <div className="MasonryContainer">
      <div>
        {
          map(children, (cur, index) => {
            if (index % 2 === 0) {
              return cur;
            }
            return undefined;
          })
        }
      </div>
      <div>
        {
          map(children, (cur, index) => {
            if (index % 2 !== 0) {
              return cur;
            }
            return undefined;
          })
        }
      </div>
    </div>
  );
}

export default MasonryContainer;
