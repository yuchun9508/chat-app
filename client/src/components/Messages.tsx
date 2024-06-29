import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../App';
import { SocketMessage } from './MessageForm';
import MessageBubble from './MessageBubble.tsx';

const Messages = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<SocketMessage[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (data: SocketMessage) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, [socket]);

  return (
    <>
      {/* TODO: auto scroll for latest message */}
      {messages.map((message) =>
        sessionStorage.getItem('userName') === message.name ? (
          <MessageBubble key={message.id} message={message.text} isPrimary />
        ) : (
          <MessageBubble
            key={message.id}
            message={message.text}
            userName={message.name}
          />
        )
      )}
    </>
  );
};

export default Messages;
