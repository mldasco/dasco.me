'use client';

import classNames from 'classnames';
import {useChat} from 'ai/react';
import {FC, memo,useEffect, useRef} from 'react';
import {CornerDownLeft} from "lucide-react";

const ChatArea: FC = memo(() => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const {messages, input, handleInputChange, handleSubmit} = useChat();

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div
      className="flex flex-col pt-1 h-96 overflow-y-auto flex gap-3 scrollbar-thumb-blue-rounded 
          scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map(message => (
        <div className="chat-message" key={message.id}>
          <div
            className={classNames('flex items-end', {
              'justify-end': message.role == 'user',
            })}>
            <div
              className={classNames('flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden', {
                'order-1 items-end': message.role == 'user',
                'order-2 items-start': message.role != 'user',
              })}>
              <p
                className={classNames('px-4 py-2 rounded-lg', {
                  'bg-blue-600 text-white': message.role == 'user',
                  'bg-gray-200 text-gray-900': message.role != 'user',
                })}>
                {message.content}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
      <div className="space-y-1.5">
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-1 right-1 w-80 h-10 p-2 border-gray-300 rounded shadow-xl focus:border-gray-300 focus:ring-0 "
            onChange={handleInputChange}
            placeholder="Ask anything about Dasco..."
            value={input}
          />
        </form>
      </div>
      <div className="fixed bottom-1 h-10 right-1 flex py-1.5 pr-1.5 z-50">
        <kbd className="inline-flex items-center rounded bg-white  px-1 font-sans text-xs text-gray-400">
          <CornerDownLeft className="w-4 h-4" />
        </kbd>
      </div>
    </div>
  );
});

export default ChatArea;
