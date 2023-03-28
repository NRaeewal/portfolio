
import { Icon } from '@iconify/react';
import './navigation-bar.css';


const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <div className='navigation-logo'>
        Nar Raeewal
      </div>
      <div className="navigation-links">
        <a href="#"> About</a>
        <a href="#">Resume</a>
        <a href="#"> Projects</a>
        <a href="#"> Contact</a>
        <Icon icon="cil:hamburger-menu" />
      </div>
    </div>
  )
}

export default NavigationBar;