import ContactImage from './images/nar.png'

import './contact.css'

const Contact = () =>{
  return(
    <div className="section" id="contact">
    < hr className="section-line"/>
      <div className="header">Contact Me</div>
      < hr className="section-line"/>
      <div className='contact-card'>
      <img src={ContactImage} />
      <div className='contact-info'>
        <p className='regular'>nraeewal@gmail.com</p>
      </div>
      </div>
    </div>
  )
}

export default Contact;