import React from 'react'

const Page5 = () => {

  return (
    <div>
      
      <div className='mt-[208px]'>

        {/* headings */}
        <div className='flex flex-col justify-center'>
              <center>
              <label className='text-[32px] font-bold'> Driving Property Inquiries to Conversions</label>
              <p className='text-[24px] mt-[1rem]'> Streamlined Strategies for Real Estate Success</p>
              </center>
        </div>
        {/* image and texts */}
        <div className='flex mt-[4rem] w-full h-[385px] justify-center'>

          <img className='h-[400px] w-[500px]' src="./images/bro.png" alt="" />

          <div className='ml-[98px] h-[280px] w-[682px]'>
            <label className='text-[32px] h-[96px] w-[646px] font-bold'>Optimized Path to Property Purchase</label>
            <p className='text-[24px] mt-[1rem] text-[#333333]'>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
            <button className="mr-10 mt-[32px] border-1 text-[18px] font-semibold w-[233px] h-[61px] text-white bg-blue-500 border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-200 cursor-pointer">Get Started</button>
          </div>


        </div>
  
      </div>
      
    </div>
  )
}

export default Page5
