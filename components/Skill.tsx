import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
  <div className='group flex relative cursor-pointer'>
    <motion.img
    initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0,
    }}
    src='https://i.pinimg.com/236x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg'
    className='rounded-full border border-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
    />

<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
    <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>100%</p>
    </div>
</div>
</div>
  );
}

export default Skill;
