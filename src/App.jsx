import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScreenSection from './components/ScreenSection'
import PricingPlan from './components/PricingPlan'
import Testimonies from './components/Testimonies'
import WaitLIst from './components/WaitLIst'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Navbar/>
       <Hero/>
       <ScreenSection/>
       <PricingPlan/>
       <Testimonies/>
       <WaitLIst/>
       <Footer/>
      </div>
  )
}

export default App
