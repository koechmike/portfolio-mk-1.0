import { motion } from 'framer-motion'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    className='h-screen flex flex-col relative text-center md:flex-row max-w-full 
    px-10 justify-evenly mx-auto items-center overflow-hidden text-lft'>
    <h3 className='absolute top-24 uppercase tracking-[15px] text-white text-2xl'>
        Experience
    </h3>
    <div className='w-full flex space-x-s overflow-x-scroll pt-20 p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[#292929a4] scrollbar-thumb-[#0af7df] '>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </motion.div>
  )
}