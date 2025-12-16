import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import ImageCarousel from './ImageCarousel';

const PricingSection = ({
  title,
  price,
  description,
  images = [],
  index = 0,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)}>
      <div className='mb-4 flex items-end justify-between flex-wrap gap-2'>
        <div className='flex flex-col'>
          <h3 className='text-white font-bold text-[24px] sm:text-[28px]'>
            {title}
          </h3>
          {description ? (
            <p className='text-secondary text-[14px] sm:text-[16px]'>
              {description}
            </p>
          ) : null}
        </div>
        {price ? (
          <span className='inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[12px] sm:text-[14px] px-3 py-1 shadow'>
            {price}
          </span>
        ) : null}
      </div>
      <ImageCarousel images={images} />
    </motion.div>
  );
};

export default PricingSection;
