import './App.css'
import Page1 from './Pages/Page1.jsx'
import Page2 from './Pages/Page2.jsx'
import Page3 from './Pages/Page3.jsx'
import Page4 from './Pages/Page4.jsx'
import Page5 from './Pages/Page5.jsx'
import Page6 from './Pages/Page6.jsx'
import Page7 from './Pages/Page7.jsx'
import Page8 from './Pages/Page8.jsx'
import Page9 from './Pages/Page9.jsx'
import Page10 from './Pages/Page10.jsx'
import Page11 from './Pages/Page11.jsx'


function App() {

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
    <>
      
      {/*---------------------- Page: 1 ----------------------*/}
      <Page1 />

      {/*---------------------- Page: 2 ----------------------*/}
      <Page2 />

      {/*---------------------- Page: 3 ----------------------*/}
      <Page3 />

      {/*---------------------- Page: 4 ----------------------*/}
      <Page4 />

      {/*---------------------- Page: 5 ----------------------*/}
      <Page5 />

      {/*---------------------- Page: 6 ----------------------*/}
      <Page6 />

      {/*---------------------- Page: 7 ----------------------*/}
      <Page7 />

      {/*---------------------- Page: 8 ----------------------*/}
      <Page8 />

      {/*---------------------- Page: 9 ----------------------*/}
      <Page9 />

      {/*---------------------- Page: 10 (Form) ----------------------*/}
      <Page10 />
      
      {/*---------------------- Page: 11 (Footer) ----------------------*/}
      <Page11 />

    </>
  )
}

export default App
