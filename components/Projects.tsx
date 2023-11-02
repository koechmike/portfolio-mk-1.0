import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    className='h-screen flex flex-col relative text-left md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center overflow-hidden z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>
        Projects
    </h3>
    
    <div className='w-full flex pt-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#292929a4] scrollbar-thumb-[#0af7df]'>
      {projects.map((project, i) => (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>
          <motion.img 
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src='https://i.pinimg.com/564x/e5/56/13/e55613b19951fccf04a95ccbcf7f0ca4.jpg' 
          alt=''
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#0af7df]/50'>
                Case Study {i + 1} of {projects.length}:
                </span>{" "} 
                UBER Clone
            </h4>
            <p className='text-lg text-center md:text-left'>
            In 2023, a startup launched a ride-sharing app, aiming to replicate Uber's success. They faced challenges like regulatory compliance,
            driver recruitment, and building a user-friendly app. With strategic marketing and a robust platform, the company gained traction. 
            By focusing on customer satisfaction and innovation, the Uber clone achieved significant growth, 
            emphasizing the importance of adaptability and user-centric design in the ride-sharing industry.
            </p>
          </div>
    </div>
      ))}
      </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
  </motion.div>
  )
}

export default Projects