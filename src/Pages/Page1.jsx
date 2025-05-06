import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { BiSolidPhoneCall } from "react-icons/bi";

const Page1 = () => {

    return (
        <div className='h-screen'>

            {/* NavBar */}
            <div className='flex justify-between items-center xl:mt-[1rem] md:mt-[2rem] sm:mt-[2rem]'>
                <label className='text-[34px] font-serif font-bold bg-gradient-to-br from-[#00ADB5] via-teal-300 to-[#00ADB5] bg-clip-text text-transparent'>RonakSingh</label>
                <button className='mx-3 w-[15rem] bg-[#00ADB5] duration-200 hover:bg-[#222831] border-[#00ADB5] border-2 hover:border-[#00ADB5] shadow-sm text-white text-[15px] rounded-4xl cursor-pointer py-1 px-5 flex items-center justify-center group'><BiSolidPhoneCall className='mr-3 animate-bounce group-hover:animate-none' size={22}/> Contact Me</button>
            </div>

            {/* Main Section */}
            <div className='mt-[150px] justify-center flex mx-auto'>
                <label className='w-[60%] p-0 text-white text-[96px] font-serif uppercase'>proficient in<br />
                    <label className='text-[#00ADB5] p-0 text-[96px] font-serif'>
                        <TypeAnimation 
                            sequence={[
                                "React.js",
                                1000,
                                "Node.js",
                                1000,
                                "MySql",
                                1000,
                                "FastAPI",
                                1000,
                                "PowerBI",
                                1000,
                                "AI/ML",
                                1000,
                                "Cloud",
                                1000,
                            ]}
                            wrapper='span'
                            speed={1}
                            repeat={Infinity}
                        />
                    </label>
                </label>
                <div className='relative  right-0'>
                    <img className='w-[450px] h-[400px]' src="./images/doodles mixed round.svg" alt="" />
                    <img className='w-[450px] h-[400px] absolute top-[10rem] right-[6rem]' src="./images/Group 2346.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Page1