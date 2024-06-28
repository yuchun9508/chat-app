import React, { useContext, useState } from 'react';
import ArrowForwardIcon from '../icons/ArrowForwardIcon.tsx';
import { SocketContext } from '../App.js';

export type SocketMessage = {
  text: string;
  name: string;
  id: string;
  socketID: string;
};

const MessageForm = () => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('message', {
      text: message,
      name: sessionStorage.getItem('userName'),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    } as SocketMessage);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Write message"
          className="flex-1 outline-none border rounded-md border-gray-200 text-slate-800 placeholder:text-slate-300 px-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-md flex justify-center items-center">
          <ArrowForwardIcon />
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
