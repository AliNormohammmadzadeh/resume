import React from 'react'
import {motion} from 'framer-motion'
import projects from '../public/assets/projects'
import Link from 'next/link'

type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div 
     initial={{opacity:0}}
     whileInView={{ opacity: 1}}
     transition={{ duration: 1.5}}
     className='h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className="absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
         snap-mandatory z-20
         scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
         {projects.map((project , i) => (
          // eslint-disable-next-line react/jsx-key
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen  '>
            <div className='relative'>
              <motion.img
                initial={{
                  y : -300,
                  opacity: 0
                }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration : 1.2}}
                whileInView={{ opacity:1 , y : 0}}
                viewport= {{ once : true}}
                src={project.img}
                alt=''
                className='pt-20 w-96 sm:w-96 md:w-[384px] md:pt-5 xl:w-[484px] xl:pt-2'
              />
              <div className='absolute bottom-0 left-0 right-0 p-12 text-center bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 opacity-0 hover:opacity-100'>
                <p className='text-base font-bold'>Use VPN</p>
                <Link href={project.url}>
                  <a className='inline-block px-4 py-2 mt-4 font-bold text-white bg-cyan-700 rounded hover:bg-teal-900'>
                    View Project
                  </a>
                </Link>
              </div>
            </div>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
              <h4 className='text-2xl font-semibold text-center md:text-4xl'> 
                Project {i+1} of {projects.length}: &nbsp;
                <span className='underline decoration-[#F7AB0A]/50' >{project.name}</span> 
              </h4>
              <p className='text-sm text-center md:text-left md:text-[14px] lg:text-lg text-ellipsis'>
                {project.description}
              </p>
            </div>
        </div>
        ))}
      </div>


      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
      </div>
    </motion.div> 
  )
}
