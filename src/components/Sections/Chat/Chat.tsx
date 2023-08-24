'use client';

import {FC, memo} from 'react';

import ChatHeader from './ChatHeader';
import ChatArea from './ChatArea'

import {Accordion, MemoizedAccordionContent, MemoizedAccordionItem, MemoizedAccordionTrigger} from './ui/accordion';

const Chat: FC = memo(() => {
  return (
    <Accordion className="relative bg-white z-40 shadow" collapsible type="single">
      <MemoizedAccordionItem value="item-1">
        <div className="fixed right-1 w-80 bottom-1 bg-white border border-gray-200 rounded-md overflow:hidden">
          <div className="w-full h-full flex flex-col">
            <MemoizedAccordionTrigger className="px-6 border-b border-zinc-300">
              <ChatHeader />
            </MemoizedAccordionTrigger>
            <MemoizedAccordionContent>
              <ChatArea />
            </MemoizedAccordionContent>
          </div>
        </div>
      </MemoizedAccordionItem>
    </Accordion>
  );
});
export default Chat;
