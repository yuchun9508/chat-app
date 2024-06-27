import React from 'react';
import ArrowForwardIcon from './ArrowForwardIcon.tsx';
import MessageBubble from './MessageBubble.tsx';

const ChatRoom = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="col-span-1 bg-slate-900 text-slate-50 pl-14 pr-2 py-10">
        <div className="flex flex-col h-full">
          <h3 className="mb-10">In Room (3)</h3>
          <div className="flex-1 overflow-y-auto">
            <ul className="max-h-0">
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
              <li>Neque</li>
              <li>Amklrmv</li>
              <li>Encmlv</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-slate-50 px-14 py-10">
        <div className="flex flex-col h-full divide-y">
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
          <div className="pt-10">
            <form>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Write message"
                  className="flex-1 outline-none border rounded-md border-gray-200 text-slate-800 placeholder:text-slate-300 py-4 px-3"
                />
                <button className="w-16 h-16 bg-gray-200 border rounded-md flex justify-center items-center">
                  <ArrowForwardIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
