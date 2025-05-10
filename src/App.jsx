import './App.css'
import Footer from './Pages/Footer.jsx'
import Page1 from './Pages/Page1.jsx'
import Page2 from './Pages/Page2.jsx'
import Page3 from './Pages/Page3.jsx'
import Page4 from './Pages/Page4.jsx'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import './CSS/styles.css'
import EducationPage from './Pages/EducationPage.jsx'
import MyDialogueBox from './UtilityComponents/MyDialogueBox.jsx'
import MyEmailOpenerTest from './UtilityComponents/MyEmailOpenerTest.jsx'


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, once:true })
  }, [])

  return (
    <div className='md:container md:mx-auto contain-content w-[90%] mx-auto'>
      
      {/*---------------------- Page: 1 ----------------------*/}
      <Page1 />

      {/*---------------------- Page: 2 ----------------------*/}
      <Page2 />

      {/*---------------------- Page: 3 ----------------------*/}
      <Page3 />

      {/*---------------------- Education ----------------------*/}
      <EducationPage />

      {/*---------------------- Page: 4 ----------------------*/}
      <Page4 />

      {/*---------------------- Footer ----------------------*/}
      <Footer />




{/* <MyEmailOpenerTest /> */}
{/* <div className='mt-[30rem]'></div> */}

    </div>
  )
}

export default App