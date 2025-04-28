import React from 'react'

const Page8 = () => {

  return (
    <div>
      
      <div className='mt-[240px]'>

          {/* Headings */}
          <div className='flex flex-col justify-center'>
            <center>
            <label className='text-[32px] font-bold'>What Our Pharma Partners Say</label>
            <p className='text-[24px] mt-[1rem] text-[#333333]'>Driving Transformations, One Brand at a Time</p>
            </center>
          </div>

          {/* carousel */}
            <div className='flex mt-[4rem] w-[1117px] h-[564px] justify-center items-center mx-auto shadow-lg rounded-xl'>

              <div className='h-[464px] w-[600px]'>
                <img className='h-full w-full' src="./images/Video.png" alt="" />
              </div>

              <div className='ml-[39px] h-[285px] w-[397px]'>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center'>
                    <img className='h-[80px] w-[80px] rounded-[3rem] mr-[1rem]' src="./images/Avatar of team.png" alt="" />
                    <label className='text-[18px] font-bold'>Tabish Khan</label>
                  </span>
                  <img className='h-[62px] w-[62px]' src="./images/Symbol.png" alt="" />
                </div>
                <p className='text-[24px] mt-[1rem]'>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
              </div>

            </div>

          {/* Carousel buttons */}
          <div className='flex justify-center mt-[39px]'>
            <button className="border-[3px] text-[30px] font-bold mx-4 w-[60px] h-[60px] text-blue-500 bg-white border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-blue-500 hover:text-white duration-200 cursor-pointer">←</button>
            <button className="border-[3px] text-[30px] font-bold mx-4 w-[60px] h-[60px] text-blue-500 bg-white border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-blue-500 hover:text-white duration-200 cursor-pointer">→</button>
          </div>

      </div>
      
    </div>
  )
}

export default Page8
