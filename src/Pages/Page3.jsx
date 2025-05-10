import React, { useState } from 'react'
import 'aos/dist/aos.css'

const Page3 = () => {
  
  const [ TabSelected, setTabSelected] = useState(1)
  
  const tabsInfo = [
    {
      id: 1,
      tab: "FullStack",
      body: <div className='flex flex-wrap justify-center'>
                {
                  [
                    {
                      title: "Password Generator",
                      image: "./tabImages/fullstack/passGen.png"
                    },
                    {
                      title: "Client Website",
                      image: "./tabImages/fullstack/chary.png"
                    },
                    {
                      title: "Portfolio",
                      image: "./tabImages/fullstack/portfolio.png"
                    }
                  ].map(({ title, image }, i) => 
                      <div data-aos-once="true" data-aos="fade-up" className='backdrop-blur-sm shadow-lg bg-white/5 p-7 mx-5 my-5 rounded-2xl flex justify-center' key={title}>
                        <div className='relative'>
                          <img className='w-[265px] h-[158px] hover:opacity-50 focus:opacity-50 duration-200 peer' tabIndex={0} src={image} />
                          <div className={`bg-black/50 text-white absolute bottom-0 w-full h-[30%] opacity-0 ease-in-out duration-500 peer-focus:opacity-100 peer-hover:opacity-100 flex justify-center items-center`}>{title}</div>
                        </div>
                      </div>
                  )
                }
            </div>,
    },
    {
      id: 2,
      tab: "DataAnalytics",
      body: <div className='flex flex-wrap justify-center'>
                {
                  [
                    {
                      title: "ML Algorithm",
                      image: "./tabImages/dataAnalytics/ML.png"
                    },
                    {
                      title: "PowerBI Dashboard",
                      image: "./tabImages/dataAnalytics/powerbi.png"
                    }
                  ].map(({ title, image }, i) => 
                      <div data-aos-once="true" data-aos="fade-up" className='backdrop-blur-sm shadow-lg bg-white/5 p-7 mx-5 my-5 rounded-2xl flex justify-center' key={title}>
                        <div className='relative'>
                          <img className='w-[265px] h-[158px] hover:opacity-50 focus:opacity-50 duration-200 peer' tabIndex={0} src={image} />
                          <div className={`bg-black/50 text-white absolute bottom-0 w-full h-[30%] opacity-0 ease-in-out duration-500 peer-focus:opacity-100 peer-hover:opacity-100 flex justify-center items-center`}>{title}</div>
                        </div>
                      </div>
                  )
                }
            </div>,
    },
    {
      id: 3,
      tab: "Python",
      body: <div className='flex flex-wrap justify-center'>
                {
                  [
                    {
                      title: "Calories Tracker",
                      image: "./tabImages/python/calcal.png"
                    },
                    {
                      title: "Pdf-To-Excel",
                      image: "./tabImages/python/pdfToExcel.png"
                    }
                  ].map(({ title, image }, i) => 
                      <div data-aos-once="true" data-aos="fade-up" className='backdrop-blur-sm shadow-lg bg-white/5 p-7 mx-5 my-5 rounded-2xl flex justify-center' key={title}>
                        <div className='relative'>
                          <img className='w-[265px] h-[158px] hover:opacity-50 focus:opacity-50 duration-200 peer' tabIndex={0} src={image} />
                          <div className={`bg-black/50 text-white absolute bottom-0 w-full h-[30%] opacity-0 ease-in-out duration-500 peer-focus:opacity-100 peer-hover:opacity-100 flex justify-center items-center`}>{title}</div>
                        </div>
                      </div>
                  )
                }
            </div>,
    },
  ]
  
  return (
    <div className="md:h-screen md:mb-0 mb-[5rem] flex">

        {/* Main Section */}
        <div className='mt-[5rem] w-full'>
        {/* bg-white/5 p-2 backdrop-blur-sm */}
            <div className='flex'>
              <label className='p-0 text-white text-[64px] font-serif font-bold'>My recent <label className='w-[60%] p-0 text-[#00ADB5] text-[64px] font-serif font-bold'>works</label><br /></label>
            </div>

            {/* ----------Tabs---------- */}
            <div className='mt-[2rem] w-full'>
              {/* Head */}
              <div className='flex'>
                {tabsInfo.map(({ tab, id }, i) => 
                    <div key={tab} onClick={() => setTabSelected(id)} className={`mx-2 text-white p-2 backdrop-blur-sm rounded-4xl cursor-pointer px-5 shadow-lg ${TabSelected == id? "bg-[#00ADB5]" : "bg-white/5"} hover:shadow-[#00ADB5] duration-200`}>{tab}</div>
                  )}
              </div>
              {/* Body */}
              <div className='mt-[2rem]'>
                  {tabsInfo.map(({ id, body }, i) => id === TabSelected? <div key={id}>{body}</div> : <div key={id}></div> )}
                  {/* {tabsInfo[0].body} */}
              </div>
            </div>

        </div>

    </div>
  )
}

export default Page3
