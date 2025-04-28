import React from 'react'

const Page10 = () => {

  return (
    <div>
      
      <div className='mt-[303px]'>

          {/* Headings */}
          <div className='mx-auto w-[1030px] h-[136px]'>
            <center>
              <label className='text-[32px] font-bold'>Connect with Our Digital Marketing Experts</label>
              <p className='text-[24px] mt-[1rem] text-[#333333]'>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together.</p>
            </center>
          </div>

          {/* Form */}
            <div className='flex flex-col mt-[63px] w-[904px] h-[424px] px-[3rem] pt-[2rem] shadow-lg mx-auto rounded-xl'>
              <div className='flex'>
                <div className='w-[380px] h-[272px] mx-3'>
                  <div>
                    <label className='text-[16px] font-bold'>Name</label><br />
                    <input className='p-2 placeholder:text-gray-400 w-[380px] h-[44px] mt-[16px] border-1 border-gray-300 rounded-sm' type="text" name="" placeholder='Enter your name Name' />
                  </div>
                  <div className='mt-[16px]'>
                    <label className='text-[16px] font-bold'>Phone</label><br />
                    <input className='p-2 placeholder:text-gray-400 w-[380px] h-[44px] mt-[16px] border-1 border-gray-300 rounded-sm' type="number" name="" placeholder='Enter your name Phone' />
                  </div>
                  <div className='mt-[16px]'>
                    <label className='text-[16px] font-bold'>Email</label><br />
                    <input className='p-2 placeholder:text-gray-400 w-[380px] h-[44px] mt-[16px] border-1 border-gray-300 rounded-sm' type="email" name="" placeholder='Enter your name Email' />
                  </div>
                </div>

                <div className='w-[380px] h-[272px] mx-3'>
                    <label className='text-[16px] font-bold'>Message</label><br />
                    <textarea className='p-2 placeholder:text-gray-400 mt-[16px] border-1 border-gray-300 rounded-sm' rows={10} cols={50} type="text" name=""  placeholder='Enter your name message' />
                </div>
              </div>

              <center>
                <button className="mr-10 mt-[32px] border-1 text-[24px] font-semibold w-[408px] h-[61px] text-white bg-blue-500 border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-200 cursor-pointer">Get Started</button>
              </center>
              
            </div>

      </div>
      
    </div>
  )
}

export default Page10
