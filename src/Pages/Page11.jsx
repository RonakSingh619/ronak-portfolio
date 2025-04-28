import React from 'react'

const Page11 = () => {

  return (
    <div>
      
      <div className='mt-[303px] mb-[10rem]'>

        <div className='flex justify-between w-[1280px] h-[657px] bg-[#e0ebf7] rounded-3xl mx-auto p-[3rem]'>

            <div>
              <div className='w-[365px] h-[160px] mb-[47px]'>
                <img className='w-[137px] h-[72px]' src="osumare.png" alt="" />
                <p className='text-[16px] mt-[1rem] text-[#333333]'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
              </div>

              <div className='w-[196px] h-[131px] mb-[47px]'>
                <label className='text-[18px] font-bold'>Address</label>
                <p className='text-[16px] mt-[1rem] text-[#333333]'>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
              </div>

              <div className='w-[196px] h-[131px] flex flex-col'>
                <label className='text-[24px] font-bold'>Contacts</label>
                <span className='flex items-center mt-5'>
                  <img className='mr-4 w-[24px] h-[24px]' src=".\images\Vector.png" alt="" />
                  <p className='text-[16px] text-[#333333]'>hello@osumare.in</p>
                </span>
                <span className='flex items-center mt-5'>
                  <img className='mr-4 w-[24px] h-[24px]' src=".\images\phone-fill.png" alt="" />
                  <p className='text-[16px] text-[#333333]'>+91 8459 8762 26</p>
                </span>
              </div>
            </div>

            <div>
              <div>
                <label className='text-[24px] font-bold'>Menu</label>
              </div>
              <div className='flex flex-col mt-[1rem]'>
                {['Home', 'About', 'Services', 'Work', 'Blog', 'Career'].map((menu, i) => 
                  <p className='text-[16px] mt-[1rem] text-[#333333]'>{menu}</p>
                )}
              </div>
            </div>

            <div className='w-[280px] h-[176px]'>
              <div>
                <label className='text-[24px] font-bold'>Menu</label>
              </div>
              <div className='flex mt-[1rem] flex-wrap'>
                {['./images/x.png', './images/fb.png', './images/yt.png', './images/p.png', './images/wa.png', './images/insta.png'].map((src, i) => 
                    <img className='cursor-pointer w-[40px] h-[40px] mb-[1.5rem] mr-[1.5rem]' src={src} alt="" />
                )}
              </div>
            </div>

        </div>

        <center className='mt-[32px]'>
          <label className='text-[16px] text-[#000C1A]'>© 2023 Osumare. All rights reserved.</label>
        </center><br />

        <center className='mt-[32px]'>
          <label className='text-[16px] font-bold text-[#000C1A]'>Developed By RonakSingh Sikh</label>
        </center><br />
        
      </div>
      
    </div>
  )
}

export default Page11