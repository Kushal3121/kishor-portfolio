import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import {
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
  FaPalette,
  FaDollarSign,
  FaClock,
  FaMapMarkerAlt,
  FaTwitter,
  FaArtstation,
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
              3D Character Artist
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
        <div className='flex flex-col gap-3 text-white/90 max-w-3xl'>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='mt-0.5 text-green-400' />
            <p className='text-sm sm:text-[15px]'>
              Custom 3D character sculpts for 3D printing, including stylized,
              cartoon, and semi-realistic styles.
            </p>
          </div>
          <div className='flex items-start gap-2'>
            <FaCheckCircle className='mt-0.5 text-green-400' />
            <p className='text-sm sm:text-[15px]'>
              Fully custom designs based on your ideas, references, or concepts.
            </p>
          </div>
        </div>

        {/* Commission tiers */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
          <div className='rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <FaDollarSign className='text-green-400' />
              <span className='text-white text-sm'>Half Body</span>
            </div>
            <span className='text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full'>
              $100+
            </span>
          </div>
          <div className='rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <FaDollarSign className='text-green-400' />
              <span className='text-white text-sm'>Full Body</span>
            </div>
            <span className='text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full'>
              $150+
            </span>
          </div>
        </div>

        {/* Quick meta */}
        <div className='mt-4 flex flex-wrap items-center gap-3 text-white/80'>
          <span className='inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full'>
            <FaClock /> Response time: 1-2 days
          </span>
          {/* <span className='inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full'>
            <FaMapMarkerAlt /> Dallas, TX
          </span> */}
        </div>

        {/* CTAs */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
          <a
            href='#pricing'
            className='w-full text-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 font-medium shadow'
          >
            View Pricing
          </a>
          <a
            href='#contact'
            className='w-full text-center rounded-xl bg-white/10 hover:bg-white/20 text-white py-3 font-medium border border-white/10'
          >
            Contact
          </a>
        </div>

        {/* Links */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
          <LinkItem
            href='https://www.artstation.com/kishorc5124'
            icon={FaArtstation}
            label='Artstation'
          />
          <LinkItem
            href='https://x.com/Kishor_c4?t=gvlHDyvMDwucbxEo7A-3AQ&s=09'
            icon={FaTwitter}
            label='Twitter'
          />
          <LinkItem
            href='https://www.instagram.com/kishor_c4/'
            icon={FaInstagram}
            label='Instagram'
          />
          <LinkItem
            href='https://www.linkedin.com/in/kishor-choudhary-8514b4251'
            icon={FaLinkedin}
            label='LinkedIn'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
