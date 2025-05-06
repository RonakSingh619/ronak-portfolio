import React from 'react'
import { IoIosSend, IoMdSend } from "react-icons/io";

const Page4 = () => {

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex w-full'>

        <div data-aos-once="true" data-aos='fade-right' className='w-[50%]'>
          <label className='p-0 text-white text-[64px] font-serif font-bold'>Got a project in <label className='w-[60%] p-0 text-[#00ADB5] text-[64px] font-serif font-bold'>mind?</label><br /></label>
          <div className='flex'>
            <img className='ml-[2rem] w-[112px] h-[169px]' src="./images/Vector 186.svg" alt="" />
            <img className='ml-[2rem] w-[255px] h-[348px]' src="./images/Group 2372.svg" alt="" />
          </div>
        </div>

        <div className='w-[50%] flex flex-col'>

          <div className='flex justify-between'>
            <div data-aos-once="true" data-aos='fade-down' className='mx-3 w-full'>
              <label className='p-0 text-white text-[18px] font-serif font-bold'>Your name</label><br />
              <input className='mt-2 placeholder:font-bold text-white placeholder:text-[#adabab] w-full bg-[#393E46] rounded-lg py-2 px-5' type="text" placeholder='Name' />
            </div>
            <div data-aos-once="true" data-aos='fade-down' className='mx-3 w-full'>
              <label className='p-0 text-white text-[18px] font-serif font-bold'>Your email</label><br />
              <input className='mt-2 placeholder:font-bold text-white placeholder:text-[#adabab] w-full bg-[#393E46] rounded-lg py-2 px-5' type="email" placeholder='Email' />
            </div>
          </div><br />

          <div data-aos-once="true" data-aos='fade-up' className='mx-3 h-full'>
            <label className='p-0 text-white text-[18px] font-serif font-bold'>Your message</label><br />
            <textarea className='mt-2 placeholder:font-bold text-white placeholder:text-[#adabab] w-full bg-[#393E46] h-[85%] rounded-lg py-3 px-5' type="text" placeholder='Message' />
          </div>

          <button className='mx-3 w-[30%] bg-[#00ADB5] duration-200 hover:bg-[#222831] border-[#00ADB5] border-2 hover:border-[#00ADB5] shadow-sm text-white text-[15px] rounded-4xl cursor-pointer py-2 px-5 flex justify-center items-center'>Send Message <IoIosSend className='ml-3' size={25}/></button>

        </div>
        
      </div>
    </div>
  )
}

export default Page4
