'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import classNames from 'classnames';
import {ChevronUp} from 'lucide-react';
import * as React from 'react';

const Accordion = AccordionPrimitive.Root;

const MemoizedAccordionItem = React.memo(
  React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  >(({className, ...props}, ref) => (
    <AccordionPrimitive.Item className={classNames('border-b', className)} ref={ref} {...props} />
  )),
);

MemoizedAccordionItem.displayName = 'AccordionItem';

const MemoizedAccordionTrigger = React.memo(
  React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  >(({className, children, ...props}, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={classNames(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        ref={ref}
        {...props}>
        {children}
        <ChevronUp className="h-4 w-4 text-black transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )),
);
MemoizedAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const MemoizedAccordionContent = React.memo(
  React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  >(({className, children, ...props}, ref) => (
    <AccordionPrimitive.Content
      className={classNames(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      ref={ref}
      {...props}>
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )),
);
MemoizedAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {Accordion, MemoizedAccordionContent, MemoizedAccordionItem, MemoizedAccordionTrigger};
