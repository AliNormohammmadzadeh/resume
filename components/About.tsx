import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}} 
     transition={{duration:1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'> 
        <h3 className='absolute top-7 sm:top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{opacity: 1 , x:0}}
        viewport={{ once:true}}
        src="resume3.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
        md:rounded-lg md:w-65 md:h-95 xl:w-[450px] xl:h-[450px]'
        />

        <div className="space-y-10 px-0 md:px-10">
             <h4 className='text-3xl font-semibold pt-5 sm:text-4xl'>Here is a <span className='underline decoration-[#F7AB0A]/50'>Little</span> Background</h4>
             <p className='text-base indent-8 pt-0 hover:indent-0'>
              I am a 21-year-old Bachelor of Computer Science graduate with a passion for technology. My focus as a developer has been on front-end development, with a specialization in React. However, I also have some experience in backend development. Additionally, I have been exploring the field of AI, with particular interest in ML, DL, and computer vision.</p>
             <p className='text-base indent-8 pt-0 hover:indent-0'>
              My love for technology and desire to learn more have led me to pursue a career in front-end development. However, I am also eager to continue developing my skills in AI and plan to pursue a master&apos; s degree in the field. Overall, I am a hardworking and dedicated individual who is excited about the opportunities that lie ahead in the tech industry.
             </p>
        </div>
    </motion.div>
  )
}