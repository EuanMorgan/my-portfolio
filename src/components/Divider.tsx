'use client';
import {motion} from 'framer-motion';

const Divider = () => {
  return (
    <motion.div
      className='bg-gray-200 my-24 w-16 h-1 rounded-full hidden sm:block'
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2}}
    />
  );
};

export default Divider;
