import './cards.css'

import design from './images/logo.png'

import { useEffect , useState} from 'react'

const Cards = ({name, link, color}) => {




  return (

    <div className="project-card"  style={{backgroundColor: color}}>
    <p>{name}</p>
    <p>{link}</p>
  </div>
  )
}

export default Cards;