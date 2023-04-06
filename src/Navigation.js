
import { Icon } from '@iconify/react';
import './navigation-bar.css';
import './buttons.css'
import { useEffect, useState } from 'react';


const NavigationBar = () => {

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClickScroll = (section) => {    
    if (section) {
      document.getElementById(section).scrollIntoView({behaviour: "smooth"})
    }
  };

  const handleOpenSideMenu = () => {
    setSideNavOpen(true)
  }

  useEffect(()=>{
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    if (width > 600) {
      setSideNavOpen(false)
    }
  }, [ width])

  return (
    <div>
    <div className='navigation-bar'>
      <div className='nav-logo'>
        Nar Raeewal      
        <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
      </div>

      <div className="navigation-links">
        <button className="navbutton" 
                onClick={(e) => {
                e.preventDefault();
                handleClickScroll("about");
              }}> 
              About
        </button>
        <button className="navbutton" 
        onClick={(e) => {
                e.preventDefault();
                handleClickScroll("resume");
              }}> 
              Resume
        </button>        
        <button className="navbutton" 
                      onClick={(e) => {
                e.preventDefault();
                handleClickScroll("projects");
              }}> Projects</button>
        <button className="navbutton" 
        onClick={(e) => {
                e.preventDefault();
                handleClickScroll("contact");
              }}> Contact</button>        
              <Icon className="menuButton" icon="cil:hamburger-menu" 
              onClick={(e) => {
                e.preventDefault();
                handleOpenSideMenu();
              }}/>
 
      </div>
    </div>
        <div className={` sideMenu ${sideNavOpen ? "sideMenuOpen" : ""}`}>
        <Icon icon="ic:round-close"  className="closeNavButton" onClick={(e) => {
                e.preventDefault();
                setSideNavOpen(false);
              }}/>

              <div className='sidemenu-links'>

<button className="navbutton" 
                onClick={(e) => {
                e.preventDefault();
                handleClickScroll("about");
                setSideNavOpen(false);

              }}> 
              About
        </button>
        <button className="navbutton" 
        onClick={(e) => {
                e.preventDefault();
                handleClickScroll("resume");
                setSideNavOpen(false);

              }}> 
              Resume
        </button>        
        <button className="navbutton" 
                      onClick={(e) => {
                e.preventDefault();
                handleClickScroll("projects");
                setSideNavOpen(false);

              }}> Projects</button>
        <button className="navbutton" 
        onClick={(e) => {
                e.preventDefault();
                handleClickScroll("contact");
                setSideNavOpen(false);

              }}> Contact</button>
              </div>
        </div>
    </div>
  )
}

export default NavigationBar;