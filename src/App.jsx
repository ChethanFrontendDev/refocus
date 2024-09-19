import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll after component mounts
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Cleanup on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className='w-full h-full bg-zinc-900 text-white font-["satoshi"]'>
      <Navbar />
      <Work /> 
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;         
