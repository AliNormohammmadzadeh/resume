import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link';
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>TEB</title>
      </Head>
      <Header/>
      
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />    
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>


      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      
      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center">
           <Link href="#hero">
              <Image   
                //  layout='fill'
                className= "h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src= "/top.png"
                alt="Top"
                width="40px"
                height="40px"
              />
            </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
