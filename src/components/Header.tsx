'use client';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {NAVIGATION_LINKS} from '~/constants/data';
const Header = () => {
  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 -translate-x-1/2 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.06] backdrop-blur-[8px] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{y: -100, x: '-50%', scale: 0.8}}
        animate={{y: 0, x: '-50%', scale: 1}}
        transition={{
          delay: 0.4,
          duration: 0.6,
          type: 'spring',
          bounce: 0.5,
        }}
      ></motion.div>
      <nav className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 flex'>
        <ul className='flex items-center w-[22rem] flex-wrap justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {NAVIGATION_LINKS.map(({link, name}) => (
            <motion.li
              key={link}
              className='h-3/4 flex items-center justify-center'
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: 'spring',
                bounce: 0.5,
              }}
            >
              <Link
                href={link}
                className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-colors'
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
