import React from 'react';
import ArrowForwardIcon from './ArrowForwardIcon.tsx';

const MessageForm = () => {
  return (
    <form>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Write message"
          className="flex-1 outline-none border rounded-md border-gray-200 text-slate-800 placeholder:text-slate-300 px-3"
        />
        <button className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-md flex justify-center items-center">
          <ArrowForwardIcon />
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
