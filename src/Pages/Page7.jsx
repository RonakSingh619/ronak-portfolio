import React from 'react'

const Page7 = () => {

  const ourExpertiseInActionCards = [
    {
      image: "./images/bell.png",
      title: "Effective CTAs",
      descr: " See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
    },
    {
      image: "./images/icon (2).png",
      title: "Conversion-Optimized Landing Pages",
      descr: "Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
    },
    {
      image: "./images/icon (3).png",
      title: "Trust Building with Social Proof",
      descr: "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
    },
    {
      image: "./images/icon (4).png",
      title: "Mobile-First Success:",
      descr: " Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
    }
  ]
  
  return (
    <div>
      
      <div className='mt-[160px]'>

        {/* headings */}
        <div className='flex justify-center'>
          <label className='text-[32px] font-bold'>Our Expertise in Action</label>
        </div>
        {/* cards */}
        <div className='flex justify-center mt-[64px]'>
          <div className='flex justify-center flex-wrap w-[1280px]'>
            {ourExpertiseInActionCards.map((obj, i) => 
                <div className='w-[621px] h-[463px] flex flex-col justify-center items-center p-2'>
                  <img className='h-[190px] w-[190px]' src={obj.image} alt="" />
                  <label className='text-[24px] font-bold mt-[2rem]'>{obj.title}</label>
                  <center><p className='text-[24px] mt-[1rem] text-[#333333'>{obj.descr}</p></center>
                </div>
              )}
          </div>
        </div>

        <div className='w-[779px] h-[182px] mt-[157px] text-[#333333] mx-auto'>
            <center>
              <label className='text-[32px] font-bold mt-[2rem]'>Your Peace of Mind</label>
              <p className='text-[24px] mt-[1rem] text-[#333333'>Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
              </p>
              <button className="mr-10 mt-[32px] border-1 text-[18px] font-semibold w-[233px] h-[61px] text-white bg-blue-500 border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-200 cursor-pointer">Get Started</button>
            </center>
        </div>
        
      </div>
      
    </div>
  )
}

export default Page7
