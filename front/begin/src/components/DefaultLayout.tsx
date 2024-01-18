import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'

function DefaultLayout() {

  const [navbarOpacity, setNavbarOpacity] = useState(1);

  const scrollY = window.scrollY;
  const triggerHeight = 150; // Adjust this value based on when you want the effect to occur
  const handleScroll = () => {

    if (scrollY > triggerHeight) {
      setNavbarOpacity(0);
    } else {
      setNavbarOpacity(1);
    }
    if (scrollY < triggerHeight) {
      setNavbarOpacity(0);
    } else {
      setNavbarOpacity(1);
    }
    if (scrollY > triggerHeight) {
      setNavbarOpacity(0);
    } else {
      setNavbarOpacity(1);
    }
  };

  const mouseEnter = () => {
    setNavbarOpacity(1)
  }
  const mouseLeave = () => {
    if(scrollY > triggerHeight){
      setNavbarOpacity(0)
    }
  }

  const scrollDirection = () => {
    
    let lastScrollY = window.scrollY;
    return () => {
      const scrollY2 = window.scrollY;

      if (scrollY2 > lastScrollY && lastScrollY > triggerHeight) {
        // Scrolling down
        setNavbarOpacity(0);
      } else {
        // Scrolling up
        setNavbarOpacity(1);
      }
  
      lastScrollY = scrollY2;
    };
  };
  
  useEffect(() => {
    const handleScrollDirection = scrollDirection();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollDirection);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);
  
  return (
    <div>
      <Navbar opacity = {navbarOpacity} mouseEnter = { mouseEnter} mouseLeave = {mouseLeave} />
      <div style={{position: "relative", zIndex: "0"}}>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
