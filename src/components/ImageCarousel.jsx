import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ArrowButton = ({ direction = 'left', onClick }) => {
  const isLeft = direction === 'left';
  return (
    <button
      aria-label={isLeft ? 'Previous' : 'Next'}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        isLeft ? 'left-2' : 'right-2'
      } z-10 rounded-full bg-black/40 hover:bg-black/60 text-white p-2 backdrop-blur transition`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-5 h-5'
      >
        {isLeft ? (
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        )}
      </svg>
    </button>
  );
};

const ImageCard = ({ index, image, onClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.6)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
      onClick={onClick}
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-center items-center'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </motion.div>
  );
};

const ImageCarousel = ({ images = [] }) => {
  const scrollRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const hideArrows = (images?.length || 0) <= 3;

  const scrollByAmount = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    // update buttons after the scroll settles
    window.setTimeout(updateScrollButtons, 350);
  };

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const tolerance = 2;
    if (hideArrows) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    setCanScrollLeft(el.scrollLeft > tolerance);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
  };

  useEffect(() => {
    if (!previewSrc) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setPreviewSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewSrc]);

  useEffect(() => {
    updateScrollButtons();
    const onScroll = () => updateScrollButtons();
    const onResize = () => updateScrollButtons();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      if (el) el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [images, hideArrows]);

  return (
    <div className='relative'>
      {!hideArrows && canScrollLeft ? (
        <ArrowButton direction='left' onClick={() => scrollByAmount(-1)} />
      ) : null}
      {!hideArrows && canScrollRight ? (
        <ArrowButton direction='right' onClick={() => scrollByAmount(1)} />
      ) : null}
      <div
        ref={scrollRef}
        className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar'
      >
        {images.map((img, idx) => (
          <div
            key={`${img}-${idx}`}
            className='snap-start shrink-0 min-w-[calc(100%-theme(space.6))] md:min-w-[calc((100%-theme(space.6))/2)] lg:min-w-[calc((100%-theme(space.6)*2)/3)]'
          >
            <ImageCard index={idx} image={img} onClick={() => setPreviewSrc(img)} />
          </div>
        ))}
      </div>

      {previewSrc ? (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setPreviewSrc(null)}
        >
          <button
            aria-label='Close preview'
            className='absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white p-2'
            onClick={(e) => {
              e.stopPropagation();
              setPreviewSrc(null);
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <img
            src={previewSrc}
            alt='Preview'
            className='max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ImageCarousel;


