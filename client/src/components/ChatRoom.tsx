import React, { useEffect } from 'react';
import Sidebar from './Sidebar.tsx';
import MessageForm from './MessageForm.tsx';
import { Navigate } from 'react-router-dom';
import Messages from './Messages.tsx';

const ChatRoom = () => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // TODO [FEATURE]: add leave confirmation dialog
      sessionStorage.removeItem('userName');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
                <Messages />
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
