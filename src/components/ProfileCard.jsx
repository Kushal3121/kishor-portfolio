import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
  FaPalette,
} from 'react-icons/fa';
import { logo } from '../assets';

const LinkItem = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition w-full'
    >
      <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition'>
        <Icon className='text-lg text-white' />
      </div>
      <span className='text-sm text-white'>{label}</span>
    </a>
  );
};

const ProfileCard = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.15, 0.9)}
      className='w-full mx-auto green-pink-gradient p-[1px] rounded-[28px] shadow-card'
    >
      <div className='relative bg-tertiary rounded-[28px] p-8 sm:p-12 overflow-hidden'>
        {/* Decorative blur */}
        <div className='absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl' />

        {/* Header */}
        <div className='relative flex flex-col sm:flex-row items-start sm:items-center gap-6'>
          {/* Avatar */}
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-md opacity-50' />
            <div className='relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-white/20'>
              <img
                src={logo}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Name & role */}
          <div className='flex-1'>
            <h2 className='text-white font-extrabold text-[30px] sm:text-[40px] leading-tight'>
              Kishor Choudhary
            </h2>
            <p className='text-secondary mt-1 flex items-center gap-2'>
              <FaPalette className='text-purple-400' />
              Character Artist • Illustrator
            </p>

            {/* Availability badge */}
            <div className='inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs border border-green-500/20'>
              <span className='w-2 h-2 rounded-full bg-green-400' />
              Open for commissions
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-6 h-px bg-white/10' />

        {/* Highlights */}
        <div className='flex flex-col gap-3 text-white/90 max-w-2xl'>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='mt-0.5 text-green-400' />
            <p className='text-sm sm:text-[15px]'>
              Expressive portraits and stylized full-body compositions with
              strong character appeal.
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='mt-0.5 text-green-400' />
            <p className='text-sm sm:text-[15px]'>
              Fast drafts, clean linework, and reliable on-time delivery.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
          <LinkItem
            href='https://www.linkedin.com/in/kushal-choudhary-a0a874196/'
            icon={FaLinkedin}
            label='LinkedIn'
          />
          <LinkItem
            href='https://github.com/Kushal3121'
            icon={FaGithub}
            label='GitHub'
          />
          <LinkItem
            href='https://www.instagram.com/artxiac/'
            icon={FaInstagram}
            label='Instagram'
          />
          <LinkItem
            href='mailto:your-email@example.com'
            icon={FaEnvelope}
            label='Email'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
