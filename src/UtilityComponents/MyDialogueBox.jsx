import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { RxCross1 } from "react-icons/rx";
import 'aos/dist/aos.css'

const MyDialogueBox = ({ title, icon, isOpen, setIsOpen  }) => {

  return ReactDOM.createPortal(
    <div className={`${isOpen? "flex" : "hidden"} fixed inset-0 bg-black/50 flex items-center justify-center`}>
        <div data-aos='fade-down' className='drop-shadow-xl drop-shadow-teal-300 w-[70%] h-[30%] opacity-100 bg-white rounded-2xl max-w-md mx-auto'>
            <div className='w-full h-[75%] flex flex-col justify-center items-center rounded-t-2xl bg-gradient-to-bl from-[#00ADB5] to-teal-300 '>
                <div tabIndex={0} onClick={() => setIsOpen(false)} className='absolute right-2 top-2 duration-200 focus:bg-white/30 hover:bg-white/30 cursor-pointer p-1 rounded-lg'><RxCross1 className='text-white' size={25} /></div>
                <div className='p-1 rounded-xl bg-white'>{icon}</div>
                <div className='text-white text-2xl font-bold mt-3'><center>{title}</center></div>
            </div>
            {/* <div className='w-full h-[25%] flex justify-center items-center rounded-b-2xl bg-white'>
                
            </div> */}
        </div>
    </div>,
    document.body
  )
}

export default MyDialogueBox
