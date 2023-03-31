
import { Icon } from '@iconify/react';
import './navigation-bar.css';
import './buttons.css'


const NavigationBar = () => {

  const handleClickScroll = (section) => {    
    console.log(section)
    if (section) {
      document.getElementById(section).scrollIntoView({behaviour: "smooth"})
    }
  };

  return (
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
              <Icon icon="cil:hamburger-menu" />
      </div>
    </div>
  )
}

export default NavigationBar;