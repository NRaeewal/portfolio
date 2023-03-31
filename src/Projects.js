import Cards from "./Cards";

import './projects.css'

const Projects = () => {

  const projectLinks = [{name: "International Safety", link: "https://www.internationalsafety.com/"}, {name: "ODC", link: "https://www.internationalsafety.com/"} ]


  const cardColors = ["#BD8E3B", "#00B2BD", "#C677E0", "#00AB84", "#FFF099", "#2F4858"]




  return (
    <div className="section" id="projects">
        < hr className="section-line"/>
        <div className="header">Projects</div>
        < hr className="section-line"/>
        <div className="project-cards">
        {projectLinks.map((item)=> (
          
          <Cards name={item.name} link={item.link} color={cardColors[Math.floor(Math.random() * cardColors.length)]} />
        ))}
        </div>
    </div>
  )
}

export default Projects;