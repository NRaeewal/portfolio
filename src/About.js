
import './about.css';
import design from './images/logo.png'
import './typography.css'
import './buttons.css'

const About = () => {

  const handleContactButton = () => {
    document.getElementById("contact").scrollIntoView({behaviour: "smooth"})

  }
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
        <button className='blue-button' onClick={(e) => {e.preventDefault(); handleContactButton()}}> Contact Me</button>
        <button className='grey-button'     
          onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/nar-raeewal-719297151/';}}> Add me on LinkedIn
        </button>
      </div>
    </div>
  )
}

export default About;