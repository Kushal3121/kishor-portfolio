import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { sketches } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, image, link }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full h-full'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-center items-center'
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </a>
    </motion.div>
  </Tilt>
);

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Creative Pursuits</p>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I have a passion for sketching and enjoy exploring various art forms,
        including pencil shading, digital art, and stippling. Below, you'll find
        some of my favorite creations.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {sketches.map((sketch, index) => (
          <ServiceCard key={sketch.title} index={index} {...sketch} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, '');
