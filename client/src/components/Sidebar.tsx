import React, { useState, useEffect, useContext } from 'react';
import GroupIcon from '../icons/GroupIcon.tsx';
import CloseIcon from '../icons/CloseIcon.tsx';
import { SocketContext } from '../App.js';
import { SocketNewUser } from './Home.tsx';

const Sidebar = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState<SocketNewUser[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    socket.on('newUserResponse', (data: SocketNewUser[]) => setUsers(data));
  }, [socket]);

  return (
    <div>
      <button
        className="flex justify-center items-center lg:hidden w-12 h-12 bg-slate-900 rounded-md mt-3 ml-3"
        onClick={() => setIsOpen(true)}
      >
        <GroupIcon />
      </button>
      <div
        className={`${
          !isOpen && '-translate-x-full'
        } lg:translate-x-0 absolute top-0 lg:static w-80 lg:w-full bg-slate-900 text-slate-50 pl-8 lg:pl-14 pr-2 py-6 lg:py-10 flex flex-col h-dvh transition-all
        `}
      >
        <button
          className="block lg:hidden ml-auto mr-2"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
        <h3 className="mb-6 lg:mb-10">In Room ({users.length})</h3>
        <div className="flex-1 overflow-y-auto">
          <ul className="max-h-0">
            {users.map((user) => (
              <li key={user.socketID}>{user.userName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
