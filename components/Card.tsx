import { motion } from 'framer-motion';
import React from 'react'


type Props = {}

export default function Card({}: Props) {
  return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929a4] p-10 
  hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
    initial={{
        y: -100,
        opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
    src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    alt=""
    />
    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of QS-INDUSTRIES</h4>
        <p className='font-bold text-2xl mt-1'>QUICKSILVER</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full'
            src='https://i.pinimg.com/236x/0c/81/21/0c8121171fefa57a22351d1a10e96c2b.jpg'
            alt=''
            />
            <img className='h-10 w-10 rounded-full'
            src='https://i.pinimg.com/236x/1a/ce/ea/1aceea69c59ecfeaa36ee21180f75fd3.jpg'
            alt=''
            />
            <img className='h-10 w-10 rounded-full'
            src='https://i.pinimg.com/236x/ae/9d/25/ae9d25646b31cf222acb38fee931fa4d.jpg'
            alt=''
            />
            <img className='h-10 w-10 rounded-full'
            src='https://i.pinimg.com/236x/1c/85/6b/1c856ba01ce866b390bd81a5aa9746fa.jpg'
            alt=''
            />
        </div>
        <p className='uppercase py-5 text-white'>
            Started work...  -  Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary points</li>
        </ul>
    </div>
  </article>;
}