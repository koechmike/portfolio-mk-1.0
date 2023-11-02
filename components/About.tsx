import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
  <motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5}}
  className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[15px] text-white text-2xl'>
        About
    </h3>
    <motion.img
    initial={{x: -200,opacity: 0,scale: 0.5}}
    whileInView={{x: 0,opacity: 1,scale: 1}}
    transition={{duration: 1,}}
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] z-20'
    src="https://ca.slack-edge.com/T0DLZ0K09-U05H3SU5UTY-d6328731bb71-512"
    />
    <motion.div 
    initial={{x: 200,opacity: 0,scale: 0.5}}
    whileInView={{x: 0,opacity: 1,scale: 1}}
    transition={{duration: 1,}}
    className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-[#0af7df]'>little</span>{" "}
            background
        </h4>
        <p className='text-base'>
        Hi there, I'm Mike🤙. A skilled IT practitioner and software developer with self-taught and trained skills. My objective in life is to expand my mind more and develop projects for the betterment of society. I am ambitious, collaborative, a leader, and goal-oriented. I have experience with frontend/backend development and familiar with IT support roles.
        </p>
    </motion.div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
  </motion.div>
  
 );
}