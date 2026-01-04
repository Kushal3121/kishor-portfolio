import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const InfoBlock = ({ title, children, index = 0 }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-2xl shadow-card'
    >
      <div className='bg-tertiary rounded-2xl p-5 sm:p-6'>
        <h3 className='text-white font-extrabold text-[24px] sm:text-[28px] mb-3'>
          {title}
        </h3>
        <div className='text-secondary text-[16px] sm:text-[18px] leading-[30px] sm:leading-[32px]'>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const CommissionInfo = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Details</p> */}
        <h2 className={styles.sectionHeadText}>Additional Information</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-8 sm:gap-10'>
        <InfoBlock title='Additional Costs' index={0}>
          <ul className='list-disc list-inside space-y-3 marker:text-purple-400'>
            <li>
              Pricing may vary depending on the{' '}
              <span className='font-semibold text-white'>
                overall complexity
              </span>{' '}
              of the character, including details and accessories.
            </li>
            <li>
              Two minor revisions are included;{' '}
              <span className='font-semibold text-white'>
                additional revisions
              </span>{' '}
              after the second are charged at $10 per revision.
            </li>
            <li>
              <span className='font-semibold text-white'>
                Basic 3D print preparation
              </span>{' '}
              is included at no extra cost, while more complex adjustments may
              require an additional fee.
            </li>
            <li>
              <span className='font-semibold text-white'>NSFW commissions</span>{' '}
              include an additional $40 charge.
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock title='Commission Process' index={1}>
          <p className='mb-3'>
            Here’s a quick overview of how I typically approach commissions:
          </p>
          <ul className='list-disc list-inside space-y-3 marker:text-purple-400'>
            <li>
              I review the client’s idea and references, confirm feasibility,
              and request additional references if needed.
            </li>
            <li>
              Once confirmed, I create a{' '}
              <span className='font-semibold text-white'>basic blockout</span>{' '}
              focusing on proportions, pose, and main elements.
            </li>
            <li>
              A{' '}
              <span className='font-semibold text-white'>
                work-in-progress (WIP)
              </span>{' '}
              is shared for feedback.
            </li>
            <li>
              The sculpt is refined and detailed based on feedback; additional
              WIPs are shared if needed.
            </li>
            <li>
              After finalization,{' '}
              <span className='font-semibold text-white'>
                3D print preparation
              </span>{' '}
              is done if requested.
            </li>
            <li>
              Final files are delivered in the{' '}
              <span className='font-semibold text-white'>required format</span>{' '}
              based on the client’s needs (such as STL, FBX, or OBJ).
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock title='Terms and Conditions' index={2}>
          <ul className='list-disc list-inside space-y-3 marker:text-purple-400'>
            <li>
              <span className='font-semibold text-white'>
                Full payment upfront
              </span>{' '}
              is required before work begins.
            </li>
            <li>
              Due to the custom nature of the work,{' '}
              <span className='font-semibold text-white'>
                refunds are not available
              </span>{' '}
              once the sculpting process has started.
            </li>
            <li>
              <span className='font-semibold text-white'>
                Two minor revisions
              </span>{' '}
              are included; additional revisions may incur extra charges.
            </li>
            <li>
              <span className='font-semibold text-white'>
                3D print supports
              </span>{' '}
              are not included, as support requirements vary depending on the
              printer and slicer used.
            </li>
          </ul>
        </InfoBlock>
      </div>
    </>
  );
};

export default SectionWrapper(CommissionInfo, 'commission-info');
