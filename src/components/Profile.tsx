'use client';
import Balancer from 'react-wrap-balancer';
import SectionTitle from './SectionTitle';
import {motion} from 'framer-motion';
const Profile = () => {
  return (
    <motion.section
      className='mb-28 max-w-4xl text-center leading-8 sm:mb-40'
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.7}}
    >
      <SectionTitle>About me</SectionTitle>
      <p className='mb-5'>
        <Balancer>
          I have always been fascinated with technology, I can&apos;t paint or
          draw so code is my way of expressing myself creatively. Whilst
          studying for my{' '}
          <span className='font-medium'>computer science degree</span> at{' '}
          <span className='underline'>Cardiff University</span>, I began working
          on an interactive{' '}
          <span className='font-medium'>
            music theory application for GuitarLessons365.com
          </span>
          , one of the internet&apos;s largest guitar tuition companies. This
          led to me being offered a{' '}
          <span className='font-medium'>
            freelance position as a web developer
          </span>
          , and resulted in me revamping the app using React Native.
        </Balancer>
      </p>
      <p className='mb-5'>
        <Balancer className='w-full'>
          After graduating with a{' '}
          <span className='font-medium'>first class degree</span>, I joined
          <span>CarbonCode Solutions as React Native developer</span>.
          Throughout my time there I constantly outgrew my role, and I worked on
          over{' '}
          <span className='font-medium'>14 different commerical projects </span>{' '}
          spanning a wide range of industries.
          <span className='font-medium'>
            I expanded my role to a full-stack web / mobile developer{' '}
          </span>{' '}
          and began leading a small team of developers .
        </Balancer>
      </p>
      <p>
        <Balancer>
          When I am away from my laptop, I spend time with my dog, Milo, and
          enjoy going for runs. I also play the guitar and enjoy video editing
          and drone photography. Every so often I stumble across a problem that
          has very limited resources about it online and I&apos;ll make a
          programming tutorial on YouTube to help teach others what I have
          learned. This has led to me having the leading tutorials for subjects
          such as React Native In-App Purchases.
        </Balancer>
      </p>
    </motion.section>
  );
};

export default Profile;
