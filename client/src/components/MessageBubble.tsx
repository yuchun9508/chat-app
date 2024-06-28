import React from 'react';

type MessageBubbleProps = {
  isPrimary?: boolean;
  userName?: string;
  message: string;
};

const MessageBubble = (props: MessageBubbleProps) => {
  const { isPrimary = false, userName = '', message } = props;

  return (
    <div className="w-full pb-7">
      <div className={`${isPrimary && 'ml-auto'} w-3/4 xl:w-2/5`}>
        <div className={`${isPrimary && 'hidden'} text-sky-500 pl-3`}>
          {userName}
        </div>
        <div
          className={`${
            isPrimary ? 'text-slate-50 bg-sky-500' : 'text-slate-900 bg-white'
          } p-3 rounded-md`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
