import React from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center mt-6 gap-8'>
        <a
          href='https://www.linkedin.com/in/kushal-choudhary-a0a874196/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='text-white text-3xl hover:text-blue-600 transition duration-300' />
        </a>

        <a
          href='https://github.com/Kushal3121'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='text-white text-3xl hover:text-gray-500 transition duration-300' />
        </a>

        <a
          href='https://www.instagram.com/artxiac/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='text-white text-3xl hover:text-pink-500 transition duration-300' />
        </a>

        <a href='mailto:your-email@example.com'>
          <FaEnvelope className='text-white text-3xl hover:text-yellow-500 transition duration-300' />
        </a>
      </div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='text-center mt-6 text-secondary text-[14px]'
      >
        <p>&copy; {new Date().getFullYear()} Kishor. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, '');
