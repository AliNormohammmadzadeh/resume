import React from 'react'
import { motion } from 'framer-motion'
import Experiencecard from './Experiencecard'
import projetss from '../public/assets/projetss'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{ duration:1.5}}
     className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
     max-w-full px-10 justify-evenly max-auto items-center'
    >   
        <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl md:top-5 ">
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
          {projetss && projetss.map((project, index)=>(
            <Experiencecard key={index} img_main={project.img_main} name={project.name} img_three={project.img_three} sumarry={project.sumarry} years={project.years} />
          ))}
        </div>
    </motion.div>
  )
}