import React from 'react'

const Page1 = () => {

    return (
        <div>

            <div className="">
                <div className="flex justify-between">
                    <img className='ml-10' src="osumare.png" alt="" />

                    <span className='mt-9'>
                        <button className="mr-10 border-1 px-10 py-1 border-black rounded-2xl hover:bg-black hover:text-white duration-200 cursor-pointer">Contact Us</button>
                    </span>
                </div>

                <div className='mx-auto w-1/2 mt-[7rem]'>
                    <label className='text-[48px] w-[899px]'>
                        <center>
                            Elevate <b className='text-[48px] text-blue-500'>Real Estate Success</b> with Osumare's Digital Expertise
                        </center>
                    </label>
                    <div className='flex justify-center'>
                        <p className='text-[24px] w-[899px]'>
                            Tailored Solutions for Thriving in the Digital Real Estate Landscape
                        </p>
                    </div>
                    <center className='mt-[2rem]'>
                        <span>
                            <button className="mr-10 border-1 text-[24px] font-semibold w-[408px] h-[56px] text-white bg-blue-500 border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-200 cursor-pointer">Get Started</button>
                        </span>
                    </center>
                </div>

                <center>
                    <div className='mt-[5rem]'>
                        <img className='ml-10 w-[796px] h-[538px]' src="./images/Header image.png" alt="" />
                    </div>
                </center>

            </div>

        </div>
    )
}

export default Page1