import React from 'react'

const Page3 = () => {

  const serviceOfferingscardsData = [
    {
      image: "./images/Group 117.png",
      title: "Automotive SEO",
      descr: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
    },
    {
      image: "./images/Group 117 (1).png",
      title: "PPC Precision",
      descr: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
    },
    {
      image: "./images/Group 117 (2).png",
      title: "Social Acceleration",
      descr: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
    },
    {
      image: "./images/Group 117 (3).png",
      title: "Content Excellence",
      descr: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
    },
    {
      image: "./images/Group 117 (4).png",
      title: "Web Design",
      descr: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
    },
    {
      image: "./images/Group 117 (5).png",
      title: "Data-Driven Insights",
      descr: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
    },
    {
      image: "./images/Group 117 (6).png",
      title: "End-to-End Solutions",
      descr: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
    },
    {
      image: "./images/Group 117 (7).png",
      title: "Video marketing",
      descr: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
    }
  ]
  
  return (
    <div>
      
      <div className='mt-[15rem] bg-gray-100 relative'><br /><br /><br />
        {/* Headings */}
          <div className='flex flex-col justify-center'>
            <center>
            <label className='text-[32px] font-bold'>Our Service Offerings</label>
            <p className='text-[24px] mt-[1rem]'> Strategies that Drive Property Market Excellence</p>
            </center>
          </div>

        {/* Cards */}
          <div className='flex justify-center mt-5'>
            <div className='mt-[4rem] w-[1350px] h-[815px] flex flex-wrap'>
              {serviceOfferingscardsData.map((obj, i) => 
                  <div className='w-[297px] h-[239px] shadow-xl rounded-sm mx-5 ' key={obj.title}>
                      <center>
                        <img className='h-[52px] w-[52px]' src={obj.image} alt="" />
                        <label className='text-[18px] font-bold'>{obj.title}</label>
                        <p className='text-[14px] mt-[1rem] px-5'>{obj.descr}</p>
                      </center>
                  </div>
              )}  
            </div>
          </div>
          
          <center>
            <button className="mr-10 mt-[22px] border-1 text-[18px] font-semibold w-[233px] h-[61px] text-white bg-blue-500 border-blue-500 rounded-[2rem] hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-200 cursor-pointer">Get Started</button>
          </center><br /><br /><br />
            
      </div>
      
    </div>
  )
}

export default Page3
