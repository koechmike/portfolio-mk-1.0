import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        
        <motion.div
        initial={{x: -500,opacity: 0,scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        transition={{duration: 1.5,}}
        className='flex flex-row items-center'>

        {/* social icons */}
        <SocialIcon url="https://github.com/koechmike" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/mikekoech1ok/" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://www.instagram.com/mi.chael_10k_b/" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://twitter.com/Mquick72117110" fgColor='white' bgColor='transparent'/>
        
        </motion.div>

        <Link href="#contact">
        <motion.div 
        initial={{x: 500,opacity: 0,scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        transition={{duration: 1,}}
        className='flex flex-row items-center text-white cursor-pointer'>
        
        <SocialIcon url="https://www.instagram.com/mi.chael_10k_b/" className="cursor-pointer" network="email" fgColor='white' bgColor='transparent'/>
        
        <p className='uppercase hidden md:inline-flex text-sm text-white'>Get In Touch</p>
        
        </motion.div>
        </Link>
    </header>
  );
}
