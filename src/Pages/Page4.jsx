import React from 'react'

const Page4 = () => {

  const weAreExpertCards = [
    {
      image: "./images/star.png",
      title: "Market Trends Analysis",
      descr: "Predictive insights to guide real estate strategies."
    },
    {
      image: "./images/flash.png",
      title: "Targeted Buyer Persona",
      descr: "Understand and connect with your ideal property buyers."
    },
    {
      image: "./images/tick.png",
      title: "Competitor Insights",
      descr: "Stand out in the property market with informed strategies."
    },
    {
      image: "./images/star.png",
      title: "Visual Content Appeal",
      descr: "Captivate buyers with appealing visuals and immersive experiences."
    }
  ]
  
  return (
    <div>
      
      <div className='mt-[10rem] h-screen'> 

          {/* headings */}
          <div className='flex flex-col justify-center'>
              <center>
              <label className='text-[32px] font-bold'>Navigating Real Estate's Digital Landscape</label>
              <p className='text-[24px] mt-[1rem]'> Insights for Real Estate Marketing Advantage</p>
              </center>
          </div>

          {/* list cards & img */}
          <div className='flex mt-[5rem] w-full h-[385px] justify-center'>

              <div className='ml-[39px] h-[385px] w-[733px]'>

                {weAreExpertCards.map((obj, i) => 
                  <div key={obj.title} className='w-[586px] h-[153px] shadow-lg flex mb-[16px] rounded-xl items-center'>
                    <div className='ml-[32px] mr-[16px]'>
                      <img className='h-[52px] w-[52px]' src={obj.image} alt="" />
                    </div>
                    <div>
                      <label className='text-[24px] font-bold'>{obj.title}</label>
                      <p className='text-[16px] mt-[0.5rem]'>{obj.descr}</p>
                    </div>
                  </div>
                )}

              </div>

              {/* <div> */}
                <img className='h-[556px] w-[746px]' src="./images/rafiki.png" alt="" />
              {/* </div> */}

          </div>
        
      </div>
      
    </div>
  )
}

export default Page4
