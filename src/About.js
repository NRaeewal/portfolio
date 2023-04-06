
import './about.css';
import design from './images/logo.png'
import './typography.css'
import './buttons.css'

const About = () => {
  return(
    <div>
    <div className='about-section' id='about'>
    <div className='about-information' >
      <div className='header-large'> Hi my name is <span className='header-large-accent'>Nar!</span></div>
      <div className='subheader'> I'm a software developer from Calgary, AB. Portfolio continues to be updated weekly!</div>

    </div>
    <div className='about-image'>
      <img src={design} id="circle-design"></img>
    </div>
  
    </div>
        <div className='about-links'>
        <button className='blue-button'> Contact Me</button>
        <button className='grey-button'> Add me on LinkedIn</button>
      </div>
    </div>
  )
}

export default About;