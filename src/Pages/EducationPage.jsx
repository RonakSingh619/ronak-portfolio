import React from 'react'
import { GiSchoolBag } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiSoapExperiment } from "react-icons/gi";

import { FaUniversity } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCalendarNumberSharp } from "react-icons/io5";

// 222831

const EducationPage = () => {

    const eduIconsSize = 30
    
    const educationDetails = [
        {
            title: "10th",
            desc: {
                    icons: [<FaUniversity className='mr-2' size={eduIconsSize} />, <IoLocation className='mr-2' size={eduIconsSize} />, <IoCalendarNumberSharp className='mr-2' size={eduIconsSize} />],
                    details: ["Beena English Medium School (B.E.M.S)", "Akurdi, Pune, Maharashtra", "2006-2019"]   // "name", "location", "duration"
                  },
            icon: <GiSchoolBag size={150} />
        },
        {
            title: "12th",
            desc: {
                    icons: [<FaUniversity className='mr-2' size={eduIconsSize} />, <IoLocation className='mr-2' size={eduIconsSize} />, <IoCalendarNumberSharp className='mr-2' size={eduIconsSize} />],
                    details: ["Pratibha Junior College (PJC)", "Kalbhornagar, Pune, Maharashtra", "2019-2021"]   // "name", "location", "duration"
                  },
            icon: <GiSoapExperiment size={150} />
        },
        {
            title: "Bachelors",
            desc: {
                    icons: [<FaUniversity className='mr-2' size={eduIconsSize} />, <IoLocation className='mr-2' size={eduIconsSize} />, <IoCalendarNumberSharp className='mr-2' size={eduIconsSize} />],
                    details: ["Ramkrishna More College (RMC)", "Pradhikaran, Pune, Maharashtra", "2021-2024"]   // "name", "location", "duration"
                  },
            icon: <FaLaptopCode size={150} />
        },
        {
            title: "Masters",
            desc: {
                    icons: [<FaUniversity className='mr-2' size={eduIconsSize} />, <IoLocation className='mr-2' size={eduIconsSize} />, <IoCalendarNumberSharp className='mr-2' size={eduIconsSize} />],
                    details: ["Sri Balaji University Pune (SBUP)", "Tathawde, Pune, Maharashtra", "2024-2026"]   // "name", "location", "duration"
                  },
            icon: <MdSchool size={150} />
        }
    ]

  return (
    <div className=" flex flex-col">

        {/* Main Section */}
        <div className='mt-[5rem] w-full'>
        {/* bg-white/5 p-2 backdrop-blur-sm */}
            <div className='flex'>
              <label className='p-0 text-white text-[64px] font-serif font-bold'>My <label className='w-[60%] p-0 text-[#00ADB5] text-[64px] font-serif font-bold'>Education</label><br /></label>
            </div>
        </div>

        <div className='flex flex-col justify-center mx-auto mt-[3rem] mb-[13rem]'>
            {educationDetails.map(({ title, desc, icon }, i) => 
                <div key={title} data-aos="fade-up" className='w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-2xl bg-white mb-[5rem] flex flex-col group cursor-pointer shadow-inner' tabIndex={0}>
                    <div className='text-white md:group-hover:text-3xl group-focus:text-3xl md:group-hover:rounded-b-none group-focus:rounded-b-none md:group-hover:h-[20%] group-focus:h-[20%] duration-700 text-[50px] nd:text-[80px] flex flex-col justify-center rounded-2xl items-center h-full w-full bg-gradient-to-t from-[#00ADB5] via-teal-300 to-[#00ADB5]'>
                        <span className='md:group-hover:hidden group-focus:hidden'>{icon}</span>
                        {title}
                    </div>
                    <div className='p-5 hidden md:group-hover:block group-focus:block ease-in-out duration-700 cursor-text flex-col items-center'>
                        {[0,1,2].map((index) =>
                            <div key={index} className='flex items-center'>
                                <span className='flex my-5 mx-2 text-sm md:text-xl'>{desc.icons[index]} :</span>
                                <span className='flex my-5 mx-2 text-sm md:text-xl'>{desc.details[index]}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default EducationPage
