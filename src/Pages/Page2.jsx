import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import 'aos/dist/aos.css'

const Page2 = () => {

  return (
    <div className='md:h-screen md:mb-0 mb-[15rem] h-fit md:flex md:items-center'>

      {/* Main Section */}
      <div className='flex justify-center mx-auto flex-col md:flex-row'>

        <div className=' flex flex-col md:w-[35%] h-[70%] mr-[4rem] ' data-aos-once="true" data-aos='fade-right'>
          <div className='flex'>
            <label className='p-0 text-white text-[64px] font-serif font-bold'>About <label className='w-[60%] p-0 text-[#00ADB5] text-[64px] font-serif font-bold'>me</label><br /></label>
            <img className='ml-[2rem] w-[57.33px] h-[88.16px]' src="./images/lightbulb.png" alt="" />
          </div>
          <details className='text-[#EEEEEE] font-thin w-[100%]'>
            <summary className='cursor-pointer'>As a versatile full-stack developer with expertise in React.js, Node.js, and React Native, I bring a unique blend of technical innovation and adaptability to the table. With a strong background in data analytics, machine learning, and cloud deployment, I'm well-equipped to build intelligent applications, drive data-driven decisions, and design efficient systems.
            </summary>
            <p>
            <br />With experience in developing and deploying multiple software solutions, I've honed my skills in crafting scalable and secure applications. My technical expertise includes: <br />

              <br />- Full-stack development using React.js, Node.js, and React Native
              <br /><br />- Data analytics and machine learning
              <br /><br />- Cloud deployment using Nginx, Firebase, and DigitalOcean
            </p>
          </details>
        </div>

        <div className='relative right-0' data-aos-once="true" data-aos='fade-left'>
          <img className='w-[450px] md:w-[550px] h-[300px] md:h-[400px]' src="./images/doodle items.svg" alt="" />
          <img className='w-[250px] md:w-[250px] h-[300px] md:h-[300px] absolute top-[10rem] right-[6rem]' src="./images/Group 62.png" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Page2
