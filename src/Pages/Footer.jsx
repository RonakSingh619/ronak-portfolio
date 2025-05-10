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
            link: "https://www.youtube.com/",
            icon: <CiYoutube className='text-white rounded-4xl' size={25} />
        },
        {
            link: "https://github.com/RonakSingh619/",
            icon: <FaGithub className='text-white rounded-4xl' size={25} />
        },
        {
            // link: "https://wa.me/919662182421",
            link: "https://wa.me/919834001393",
            icon: <FaWhatsapp className='text-white rounded-4xl' size={25} />
        }
    ]

    function scrollTtoTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    function scrollToContact(){
        window.scrollTo({ top: document.body.scrollHeight-1200, behavior: 'smooth' })
    }
    function scrollToAbout(){
        window.scrollTo({ top: 800, behavior: 'smooth' })
    }

  return (
    <div className='px-5 py-10 md:p-10  mt-[10rem]'>
      
      <div className='flex flex-col justify-center items-center mt-[5%]'>
        <div className='flex'>
            {footerLinks.map((obj, i) =>
                <div className='flex mx-4 text-white duration-200 active:text-[#00ADB5] hover:text-[#00ADB5]' key={obj.title} onClick={() => obj.title === "Home"? scrollTtoTop() : obj.title === "About Me"? scrollToAbout() : obj.title === "Contact"? scrollToContact() : "" }>
                    <span className='cursor-pointer'>{obj.icon}</span>
                    <label className='cursor-pointer ml-2'>{obj.title}</label>
                </div>
            )}
        </div>
        <div className='flex mt-[2rem]'>
            {footerLinks2.map((obj, i) =>
                <div className='flex mx-4' key={i}>
                    <a href={obj.link} className='bg-[#454a52] rounded-4xl p-2 cursor-pointer active:animate-bounce hover:animate-bounce active:shadow-xl hover:shadow-xl' tabIndex={0}>{obj.icon}</a>
                </div>
            )}
        </div>
      </div>

      <div className='flex justify-center w-full md:justify-end mr-10 mt-[10%] text-[#adabab] animate-pulse'>
        Created & Designed By - RonakSingh Sikh
      </div>
      
    </div>
  )
}

export default Footer
