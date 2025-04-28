import React from 'react'

const Page6 = () => {
  
  const drivingPropertiesCards = [
    {
      image: "./images/icon.png",
      title: "Call-to-Action Optimization",
      descr: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
    },
    {
      image: "./images/details.png",
      title: "Landing Page Efficiency",
      descr: "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
    },
    {
      image: "./images/hand.png",
      title: "Social Proof Utilization",
      descr: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
    },
    {
      image: "./images/icon (1).png",
      title: "Mobile-Friendly Experience",
      descr: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
    }
  ]
  
  return (
    <div>
      
      <div className='mt-[64px]'>
        {/* headings */}
        <div className='flex justify-center'>
          <label className='text-[32px] h-[96px] w-[646px] font-bold'>Driving Property Inquiries to Conversions</label>
        </div>
        {/* cards */}
        <div className='flex justify-center'>
          <div className='flex justify-center flex-wrap w-[1280px]'>
            {drivingPropertiesCards.map((obj, i) => 
                <div className='w-[621px] h-[463px] flex flex-col justify-center items-center'>
                  <img className='h-[190px] w-[190px]' src={obj.image} alt="" />
                  <label className='text-[24px] font-bold'>{obj.title}</label>
                  <center><p className='text-[24px] mt-[0.5rem] text-[#333333'>{obj.descr}</p></center>
                </div>
              )}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Page6
