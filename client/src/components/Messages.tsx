import React, { useContext, useEffect, useRef, useState } from 'react';
import { SocketContext } from '../App';
import { SocketMessage } from './MessageForm';
import MessageBubble from './MessageBubble.tsx';

const Messages = () => {
  const socket = useContext(SocketContext);
  const lastMessage = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<SocketMessage[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (data: SocketMessage) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, [socket]);

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
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
      <div ref={lastMessage} />
    </>
  );
};

export default Messages;
