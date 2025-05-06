import React from 'react'
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";

import { CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const footerLinks = [
        {
            title: "Home",
            link: "",
            icon: <GoHome size={20} />
        },
        {
            title: "About Me",
            link: "",
            icon: <CgProfile size={20} />
        },
        {
            title: "Contact",
            link: "",
            icon: <BsTelephone size={20} />
        }
    ]

    const footerLinks2 = [
        {
            link: "",
            icon: <CiYoutube className='text-white rounded-4xl' size={25} />
        },
        {
            link: "",
            icon: <FaGithub className='text-white rounded-4xl' size={25} />
        },
        {
            link: "",
            icon: <FaWhatsapp className='text-white rounded-4xl' size={25} />
        }
    ]

    function scrollTtoTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
  return (
    <div className='p-10 h-[25vw] mt-[10rem]'>
      
      <div className='flex flex-col justify-center items-center mt-[5%]'>
        <div className='flex'>
            {footerLinks.map((obj, i) =>
                <div className='flex mx-4 text-white duration-200 hover:text-[#00ADB5]' key={obj.title} onClick={() => obj.title === "Home" && scrollTtoTop()}>
                    <span className='cursor-pointer'>{obj.icon}</span>
                    <label className='cursor-pointer ml-2'>{obj.title}</label>
                </div>
            )}
        </div>
        <div className='flex mt-[2rem]'>
            {footerLinks2.map((obj, i) =>
                <div className='flex mx-4' key={i}>
                    <span className='bg-[#454a52] rounded-4xl p-2 cursor-pointer hover:animate-bounce hover:shadow-xl'>{obj.icon}</span>
                </div>
            )}
        </div>
      </div>

      <div className='flex justify-end mr-10 mt-[10%] text-[#adabab] animate-pulse'>
        Created & Designed By - RonakSingh Sikh
      </div>
      
    </div>
  )
}

export default Footer
