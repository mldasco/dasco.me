'use client';

import {useChat} from 'ai/react';
import {FC, memo,useEffect, useRef} from 'react';

import ChatHeader from './ChatHeader';
import {cn} from './lib/utils';
import {Accordion, MemoizedAccordionContent, MemoizedAccordionItem, MemoizedAccordionTrigger} from './ui/accordion';

const Chat: FC = memo(() => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const {messages, input, handleInputChange, handleSubmit} = useChat();

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <Accordion className="relative bg-white z-40 shadow" collapsible type="single">
      <MemoizedAccordionItem value="item-1">
        <div className="fixed right-1 w-80 bottom-1 bg-white border border-gray-200 rounded-md overflow:hidden">
          <div className="w-full h-full flex flex-col">
            <MemoizedAccordionTrigger className="px-6 border-b border-zinc-300">
              <ChatHeader />
            </MemoizedAccordionTrigger>
            <MemoizedAccordionContent>
              <div
                className="flex flex-col h-80 overflow-y-auto flex gap-3 scrollbar-thumb-blue-rounded 
                    scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {messages.map(message => (
                  <div className="chat-message" key={message.id}>
                    <div
                      className={cn('flex items-end', {
                        'justify-end': message.role == 'user',
                      })}>
                      <div
                        className={cn('flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden', {
                          'order-1 items-end': message.role == 'user',
                          'order-2 items-start': message.role != 'user',
                        })}>
                        <p
                          className={cn('px-4 py-2 rounded-lg', {
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
                <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="fixed bottom-1 right-1 w-80 h-10 p-2 border-gray-300 rounded shadow-xl focus:border-gray-300 focus:ring-0 "
                      onChange={handleInputChange}
                      placeholder="Ask anything about Dasco..."
                      value={input}
                    />
                  </form>
                </div>
              </div>
            </MemoizedAccordionContent>
          </div>
        </div>
      </MemoizedAccordionItem>
    </Accordion>
  );
});

export default Chat;
