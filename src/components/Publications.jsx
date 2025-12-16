import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { publications } from '../constants';

const PublicationCard = ({ index, title, name, desc, date, link }) => (
  <a
    href={link || '#'}
    onClick={(e) => !link && e.preventDefault()}
    target={link ? '_blank' : undefined}
    rel='noopener noreferrer'
  >
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl w-full hover:border-2 hover:border-purple-200 transition-all duration-100 ease-in-out'
    >
      <p className='text-white text-[18px]'>{title}</p>

      <div className='mt-1'>
        <div className='w-30 h-[2px] bg-purple-200 mb-3 mt-3'></div>
        <p className='text-secondary tracking-wider text-[16px] text-justify'>
          {desc}
        </p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex justify-between'>
            <p className='text-white font-medium text-[16px]'>{name}</p>
            <p className='mt-1 text-secondary text-[12px]'>
              Published on {date}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </a>
);

const Publications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Research Highlights</p>
          <h2 className={styles.sectionHeadText}>Publications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.name}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, '');
