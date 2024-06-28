import React from 'react';
import MessageBubble from './MessageBubble.tsx';
import Sidebar from './Sidebar.tsx';
import MessageForm from './MessageForm.tsx';

const ChatRoom = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="absolute lg:static lg:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="flex flex-col h-full divide-y bg-slate-50 px-7 py-5 md:px-14 md:py-10">
          <div className="flex-1 overflow-y-auto">
            <div className="max-h-0">
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                isPrimary
              />
              <MessageBubble
                message="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                userName="Neque"
              />
            </div>
          </div>
          <div className="pt-6 md:pt-10">
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
