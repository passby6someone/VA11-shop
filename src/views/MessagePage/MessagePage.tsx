import React from 'react';

import MessagePageNav from './MessagePageNav/MessagePageNav';
import Message from './Message/Message';
import './MessagePage.css';

function MePage(): JSX.Element {
  return (
    <article className="MessagePage-article">
      <MessagePageNav />
      <main className="MessagePage-messageList-container">
        <Message />
      </main>
    </article>
  );
}

export default MePage;
