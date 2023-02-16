import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {
  img_main: string,
  name: string,
  img_three: {
    img:string
  }[],
  sumarry: {
    text: string
  }[],
  years: number
}

export default function Experiencecard({img_main , name, years , img_three, sumarry}: Props) {
  return (
    <article className='py-2 flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
         initial={{
            y: -100,
            opacity:0
         }}
         transition={{ duration :1.2}}
         whileInView={{ opacity:1 , y : 0}}
         viewport={{ once: true}}
         className="w-32 h-32 object-cover object-center rounded-full overflow-hidden max-w-full max-h-full"
         style={{
          clipPath: "circle(50% at 50% 50%)"
         }}
         src={img_main}/>

         <div className='px-0 md:px-10 flex-col '>
            <h4 className='text-4xl font-light text-center'>{name}</h4>
            {/* <p className='font-bold text-2xl mt-1'>TEB</p> */}
            <div className="flex space-x-2 my-2 text-center justify-center">
                {img_three && img_three.map((item , index)=> (
                  <motion.img
                  initial={{
                    y: -50,
                    opacity:0
                 }}
                 transition={{ duration :0.8}}
                 whileInView={{ opacity:1 , y : 0}}
                 viewport={{ once: true}}
                  key={index}
                  className='h-10 w-10 rounded-full' 
                  src={item.img}
                  alt=""/>
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'> Duration of employment: <span className='text-red-500'>{years}</span> years</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              {sumarry && sumarry.map((sum,index)=>(
                <li key={index}>{sum.text}</li>
              ))}
            </ul>
         </div>
    </article>
  )
}