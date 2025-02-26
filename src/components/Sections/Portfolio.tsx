import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useRef, useState } from 'react';

import { isMobile } from '../../config';
import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8 ">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my experiences, highlights and philosophy
        </h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4 ">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="pb-6 z-0" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl ',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(({ item: { title, description } }) => {
  const [showModal, setShowModal] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useDetectOutsideClick(linkRef as React.RefObject<HTMLElement>, () => setShowModal(false));

  const handleMouseOnEnter = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setShowModal(!showModal);
      event.preventDefault();
    },
    [showModal],
  );

  function SplitDescription() {
    return (
      <>
        {description.split('\n').map((str, index) => (
          <p key={index} className="pt-1">{str}</p>
        ))}
      </>
    );
  }

  return (
    <div>
      <a
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80 z-25 hover:z-25',
        )}
        onClick={handleMouseOnEnter}
        ref={linkRef}></a>
      {showModal ? (
        <div className="opacity-100 flex justify-center items-center fixed inset-10 z-50 mx-100">
          <div
            className={classNames(
              'border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none mx-50',
              isMobile ? 'w-100' : 'w-2/3',
            )}>
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">{title}</h3>
            </div>
            <div className="relative p-3 flex-auto overscroll-auto">
              <form className="block text-black text-sm font-bold mb-1 ">
                <SplitDescription />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});
