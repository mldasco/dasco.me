//import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8 ">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my achievements, highlights and philosophy</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4 ">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
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

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
const [mobile, setMobile] = useState(false);
const [showModal, setShowModal] = useState(false);
const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(false);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setShowModal(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setShowModal(!showModal)
      event.preventDefault();
       if (mobile && !showModal) {
         event.preventDefault();
         setShowModal(!showModal);
       }
    },
    [mobile, showModal],
  );
  
  function SplitDescription() {
    return description.split('\n').map(str => <p className="pt-1">{str}</p>);
  }
  

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 z-20', 
        {'opacity-10 hover:opacity-90': !mobile},
        
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      >
      {showModal? (
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
  	    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-1/2 bg-white outline-none focus:outline-none ">
	        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
		        <h3 className="text-3xl font=semibold">{title}</h3>
            <button className="bg-transparent border-0 text-black float-right"onClick={() => setShowModal(false)}></button>
	      </div>
          <div className="relative p-3 flex-auto z-10">
            <label className="block text-black text-sm font-bold mb-1 z-0">
              <SplitDescription/>
            </label>
          </div>    
        </div>
      </div>):null}
    </a>
  );
});
