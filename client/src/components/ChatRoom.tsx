import React, { useContext, useEffect, useState } from 'react';
import MessageBubble from './MessageBubble.tsx';
import Sidebar from './Sidebar.tsx';
import MessageForm, { SocketMessage } from './MessageForm.tsx';
import { SocketContext } from '../App.js';
import { Navigate } from 'react-router-dom';

const ChatRoom = () => {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<SocketMessage[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (data: SocketMessage) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, [socket]);

  return (
    <>
      {!sessionStorage.getItem('userName') && <Navigate to="/" replace />}
      <div className="grid grid-cols-4 h-screen">
        <div className="absolute lg:static lg:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <div className="flex flex-col h-full divide-y bg-slate-50 px-7 py-5 md:px-14 md:py-10">
            <div className="flex-1 overflow-y-auto">
              <div className="max-h-0">
                {messages.map((message) =>
                  sessionStorage.getItem('userName') === message.name ? (
                    <MessageBubble
                      key={message.id}
                      message={message.text}
                      isPrimary
                    />
                  ) : (
                    <MessageBubble
                      key={message.id}
                      message={message.text}
                      userName={message.name}
                    />
                  )
                )}
              </div>
            </div>
            <div className="pt-6 md:pt-10">
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
