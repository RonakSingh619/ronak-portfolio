import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";


const Page9 = () => {

  const AccordianData = [
    {
      id: 1,
      title: "3. How does Osumare measure campaign success?",
      content: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
    },
    {
      id: 2,
      title: "3. How does Osumare measure campaign success?",
      content: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
    },
    {
      id: 3,
      title: "3. How does Osumare measure campaign success?",
      content: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
    }
  ]
  
  const Myaccordion = ({ title, content, isExpanded, onToggle }) => {
    return(
      <div className={`bg-white overflow-hidden transition-all duration-300 w-[800px] ${isExpanded ? "max-h-96" : "max-h-[68px]"}`}>

        <div className={`flex px-[2.5rem] justify-between items-start py-6 cursor-pointer duration-300 ${isExpanded? "bg-[#0078FF] text-white" : "bg-white"}`} onClick={onToggle}>
          <div className='text-[18px] font-semibold'>{title}</div>
          <FaChevronDown className={`text-lg transition-all duration-300 ${isExpanded? "rotate-180" : ""}`} />
        </div>

        <div className={`text-[#706F7B] pb-5 overflow-hidden transition-all duration-300 px-[3rem] py-[2rem] ${isExpanded? "opacity-100" : "opacity-0"}`}>
          <div>{content}</div>
        </div>

      </div>
    )
  }
  
  const [ ExpandedId, setExpandedId ] = useState(3)

  function toggleExpand(id){
    setExpandedId( ExpandedId === id? null : id )
  }

  return (
    <div>
      
      <div className='mt-[160px]'>

          {/* Headings */}
          <div className='mx-auto w-[1030px] h-[136px]'>
            <center>
              <label className='text-[32px] font-bold'>Frequently Asked Questions</label>
              <p className='text-[24px] mt-[1rem] text-[#333333]'>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
            </center>
          </div>

          {/* Accordion */}
            <div className='flex p-[1rem] flex-col mt-[4rem] w-[800px] rounded-xl justify-center items-center mx-auto shadow-xl shadow-blue-300'>

              {/* <h1 className='text-[5rem]'>Accordian pending.....</h1> */}
              {AccordianData.map((obj, i) => 
                  <Myaccordion 
                    key={obj.title}
                    {...obj}
                    isExpanded={ExpandedId === obj.id}
                    onToggle={() => toggleExpand(obj.id)}
                  />
              )}

            </div>

      </div>
      
    </div>
  )
}

export default Page9
