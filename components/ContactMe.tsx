import React from 'react'
import { PhoneIcon , MapPinIcon , EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject : string;
  message: string;
};

type Props = {}

export default function ContactMe({}: Props) {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:alikiavash1380@gmail.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl '>
            ContactMe
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-1 xl:space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className="text-2xl">+98 9337169637</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className="text-2xl">Alinormohammadzadeh2080@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className="text-2xl">Mashhad Iran</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                    <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
                </div> 

                <input {...register("subject")} placeholder="Subject" className='contactInput' type="text" />

                <textarea {...register("message")} placeholder="Message" className='contactInput' />
                <button 
                 type="submit"
                 className='bg-[#F7AB0A]/40 py-5 px-10 rounded-md text-black font-bold text-lg
                 hover:bg-[#F7AB0A]/60'
                >
                Submit
                </button>
            </form>
        </div>
    </div>
  )
}