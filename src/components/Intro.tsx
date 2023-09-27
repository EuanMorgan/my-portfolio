'use client';
import {motion} from 'framer-motion';
import {Contact, Download, Github, Linkedin} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {LinkButton} from './LinkButton';
const Intro = () => {
  return (
    <section className='mb-28 max-w-4xl sm:mb-0 text-center'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: 'tween', duration: 0.2}}
          >
            <Image
              src={'/me.png'}
              alt='Euan Morgan'
              width={144}
              height={144}
              priority={true}
              className='rounded-full h-36 w-36 border-2 border-slate-400 object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='animate-wave drop-shadow-md absolute bottom-0 right-0 block text-5xl w-fit'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 125, delay: 0.3, duration: 0.7}}
      >
        Hi, <span className='font-bold'>I&apos;m Euan.</span> A{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>2.5 years</span> experience. I thrive on
        building <span className='font-bold'>beautiful</span>,{' '}
        <span className='font-bold'>accessible</span>, and{' '}
        <span className='font-bold'>performant</span> web experiences.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row gap-3 text-lg font-medium items-center justify-center px-4'
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 125, delay: 0.4, duration: 0.7}}
      >
        <LinkButton asElement={Link} href='#contact' className='group'>
          Contact me here{' '}
          <Contact className='opacity-80 group-hover:translate-x-2 transition' />
        </LinkButton>
        <LinkButton
          download
          href='/CV.pdf'
          variant={'secondary'}
          className='group'
        >
          Download CV{' '}
          <Download className='group-hover:translate-y-1 transition group-hover:scale-95 ease-in-out opacity-75' />
        </LinkButton>
        <LinkButton
          scale={'lg'}
          href='https://linkedin.com/in/euan-morgan'
          target='_blank'
          variant={'secondary'}
          className='p-4 text-slate-500 hover:text-slate-800'
        >
          <Linkedin />
        </LinkButton>
        <LinkButton
          scale={'lg'}
          href='https://github.com/EuanMorgan'
          target='_blank'
          variant={'secondary'}
          className='p-4 text-slate-500 hover:text-slate-800'
        >
          <Github />
        </LinkButton>
      </motion.div>
    </section>
  );
};

export default Intro;
