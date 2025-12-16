import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { pricingSections } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import PricingSection from './PricingSection';

const Pricing = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Creative Pursuits</p> */}
        <h2 className={styles.sectionHeadText}>Pricing</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I have a passion for sketching and enjoy exploring various art forms,
        including pencil shading, digital art, and stippling. Below, you'll find
        some of my favorite creations.
      </motion.p>

      <div className='mt-20 flex flex-col gap-16'>
        {pricingSections.map((section, index) => (
          <PricingSection
            key={section.title}
            index={index}
            title={section.title}
            price={section.price}
            description={section.description}
            images={section.images}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Pricing, 'pricing');
