import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
    <div className='absolute border border-[#0af7df] rounded-full h-[200px] w-[200px] mt-52 animate-ping opacity-35'/>
    <div className='absolute border border-[#0af7df] rounded-full h-[300px] w-[300px] mt-52 opacity-20'/>
    <div className='absolute border border-[#0af7df] rounded-full h-[500px] w-[500px] mt-52 opacity-20'/>
    <div className='absolute border border-[#0af7df] rounded-full h-[600px] w-[600px] mt-52 animate-pulse opacity-30'/>
    <div className='absolute border border-[#0af7df] rounded-full h-[800px] w-[800px] mt-52 opacity-20'/>
    </motion.div>
  );
}

export default BackgroundCircles;