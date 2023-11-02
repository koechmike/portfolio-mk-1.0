// import Head from 'next/head'
// import { Inter } from 'next/font/google'
import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import Header from '@/components/Header'
// import Image from 'next/image'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { NextPage } from 'next';
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <div className="h-screen bg-black text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#292929a4] scrollbar-thumb-[#0af7df]">
      <head>
        <title>Michael's Portfolio</title>
      </head>
      {/* Header */}
      <Header />

      {/* Hero banner */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />  
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src='https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg'
            alt=''/>
          </div>
        </footer>
      </Link>


    </div>
    </main>
  );
}
