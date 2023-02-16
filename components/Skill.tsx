import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    img: string,
    point: number
}

function Skill({ directionLeft , img , point}: Props) {
  return (
    <div className='group relative flex justify-center items-center  cursor-pointer '>
        <motion.img
         initial={{
            x : directionLeft ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration:1}}
         whileInView={{opacity:1 , x:0}}
         viewport= {{ once : true}}
         src={img}
         className='object-scale-down rounded-full border py-1 border-gray-500  w-14 h-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 filter group-hover:grayscale
         transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-14 h-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 rounded-full z-0 '>
            <div className='flex items-center justify-center h-full'>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-black opacity-100">{point}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill