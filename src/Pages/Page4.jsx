import React, { useEffect, useState } from 'react'
import { IoIosSend, IoIosWarning, IoMdSend } from "react-icons/io";
import MyDialogueBox from '../UtilityComponents/MyDialogueBox';
import EmailOpener from '../MyFunctions/EmailOpener';
import { AbusiveWordsArray } from '../Data/AbusiveWordsArray';
import { CiWarning } from "react-icons/ci";
import { MdOutlineDoneOutline } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page4 = () => {

  // Variables
  const [FormData, setFormData] = useState({
      name: "",
      from: "",
      sub: "Request for a potential collab",
      msg: ""
  })
  const [ValidateFormData, setValidateFormData] = useState({
      name: true,
      from: true,
      msg: true
  })
  const [open, setOpen] = useState(false) 
  const [WarningOpen, setWarningOpen] = useState(false) 
  const [Loading, setLoading] = useState(false) 

  // Functions
  function checkAbusiveWords(str){
    return AbusiveWordsArray.some((val,i) => 
              str.toLowerCase().includes(val.toLowerCase())
            )
    
  }
  function validateLength(data, len, key ){
    if (data.length > len) {
      setValidateFormData({...ValidateFormData, [key]: true})
    }
    else
      setValidateFormData({...ValidateFormData, [key]: false})
  }
  function validateEmail(data, len, key ){
    if (data.length > len && data.includes("@") && data.includes(".")) {
      setValidateFormData({...ValidateFormData, [key]: true})
    }
    else
      setValidateFormData({...ValidateFormData, [key]: false})
  }
  function validateAll(){
    if(FormData.name.length === 0)
      ValidateFormData.name = false
    else
      ValidateFormData.name = true
    if(FormData.from.length === 0)
      ValidateFormData.from = false
    else
      ValidateFormData.from = true
    if(FormData.msg.length === 0)
      ValidateFormData.msg = false
    else
      ValidateFormData.msg = true
    console.log(setValidateFormData((prev) => { return {...prev} }));

  }

  useEffect(() => console.log("Loading: ",Loading) ,[Loading])

  const submit = () => {
    // Validation
    if(checkAbusiveWords(FormData.msg)){
      console.log("cuss word found");
      setWarningOpen(true)
      return
    }
      validateAll()
    if(ValidateFormData.name && ValidateFormData.from && ValidateFormData.msg){
        EmailOpener(undefined, FormData.sub, FormData.msg)
    }
    
  }

  return (
    <div className='flex justify-center items-center'>

      <MyDialogueBox icon={<MdOutlineDoneOutline className='text-green-400' size={50} />} title={"Successfull!"} isOpen={open} setIsOpen={setOpen} />   {/* Normal dialogue */}
      <MyDialogueBox icon={<IoIosWarning className='text-red-400' size={50} />} title={"Abusive words Prohibitted!"} isOpen={WarningOpen} setIsOpen={setWarningOpen} />   {/* Warning Dialogue */}

      <div className='flex flex-col md:flex-row w-full'>

        <div data-aos-once="true" data-aos='fade-right' className='w-full md:w-[50%]'>
          <label className='p-0 text-white text-[54px] md:text-[64px] font-serif font-bold'>Got a project in <label className='w-[60%] p-0 text-[#00ADB5] text-[54px] md:text-[64px] font-serif font-bold'>mind?</label><br /></label>
          <div className='flex flex-col items-center md:items-start md:flex-row'>
            <img className='ml-[2rem] hidden md:block w-[112px] h-[169px]' src="./images/Vector 186.svg" alt="" />
            <img className='ml-[2rem] mt-5 md:mt-0 mb-10 md:mb-0 w-[205px] md:w-[255px] h-[298px] md:h-[348px]' src="./images/Group 2372.svg" alt="" />
          </div>
        </div>

        <div className='mt-[1rem] md:mt-0 w-full md:w-[50%] flex flex-col'>

          <div className='flex flex-col md:flex-row md:h-fit md:justify-between'>
            <div data-aos-once="true" data-aos='fade-down' className='flex flex-col items-center md:items-stretch md:mx-3 w-full'>
              <label className=' self-start p-0 text-white text-[18px] font-serif font-bold'>Your name</label>
              {/* validation */}
              <p className={`${ValidateFormData.name? "opacity-0" : ""} text-red-500 self-start ml-5 md:ml-0`}>Invalid name!</p>
              <input onChange={(e) => {setFormData({...FormData, name: e.target.value}); validateLength(e.target.value, 0, "name") }} className='mb-5 md:mb-0 placeholder:font-bold text-white placeholder:text-[#adabab] w-[90%] md:w-full bg-[#393E46] rounded-lg py-3 md:py-2 px-5' type="text" placeholder='Name' />
            </div>
            <div data-aos-once="true" data-aos='fade-down' className='flex flex-col items-center md:items-stretch md:mx-3 w-full'>
              <label className='self-start p-0 text-white text-[18px] font-serif font-bold'>Your email</label>
              {/* validation */}
              <p className={`${ValidateFormData.from? "opacity-0" : ""} text-red-500 self-start ml-5 md:ml-0`}>Invalid email!</p>
              <input onChange={(e) => {setFormData({...FormData, from: e.target.value}); validateEmail(e.target.value, 0, "from") }} className='placeholder:font-bold text-white placeholder:text-[#adabab] w-[90%] md:w-full bg-[#393E46] rounded-lg py-3 md:py-2 px-5' type="email" placeholder='Email' />
            </div>
          </div><br />

          <div data-aos-once="true" data-aos='fade-up' className='flex flex-col items-center md:items-stretch mx-0 md:mx-3 md:h-full mb-2'>
            <label className='self-start p-0 text-white text-[18px] font-serif font-bold'>Your message</label>
            {/* validation */}
              <p className={`${ValidateFormData.msg? "opacity-0" : ""} text-red-500 self-start ml-5 md:ml-0`}>Invalid msg!</p>
            <textarea onChange={(e) => {setFormData({...FormData, msg: e.target.value}); validateLength(e.target.value, 0, "msg") }} className=' placeholder:font-bold text-white placeholder:text-[#adabab] w-[90%] md:w-full bg-[#393E46] h-[150px] md:h-[85%] rounded-lg py-3 px-5' type="text" placeholder='Message' />
          </div>

          <button onClick={() => submit()} className='mx-auto md:mx md:mx-3 w-[60%] md:w-[30%] mt-5 md:mt-0 bg-[#00ADB5] duration-200 hover:bg-[#222831] focus:bg-[#222831] border-[#00ADB5] border-2 hover:border-[#00ADB5] shadow-sm text-white text-[15px] rounded-4xl cursor-pointer py-2 px-5 flex justify-center items-center'>Send Message <IoIosSend className='ml-3' size={25}/></button>

        </div>
        
      </div>
    </div>
  )
}

export default Page4
