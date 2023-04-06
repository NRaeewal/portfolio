import './cards.css'

import design from './images/logo.png'


const Cards = ({name, link, color}) => {




  return (

    <div className="project-card"  style={{backgroundColor: color}}>
    <p className='subheader'>{name}</p>
    <a href={link} target="_blank">{link}</a>
  </div>
  )
}

export default Cards;