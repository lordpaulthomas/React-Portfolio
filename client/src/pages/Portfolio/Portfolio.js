import React, { Component } from "react";
import NavBar from './../../components/NavBar';
import ProjectCard from "./../../components/ProjectCard";
import Wrapper from "./../../components/Wrapper";
import projects from "./../../ProjectData/projectData.json"
import './style.css';
class Portfolio extends Component {

  state = {
    projects
  }

  render() {
    return (
      <div >
        <NavBar />
        <Wrapper >
          {
            this.state.projects.map(project => {
              return (
                <ProjectCard 
                  key={project.id}
                  style={{width: "100vw;"}}
                  id="wrapper"
                  description={project.description}
                  tech={project.tech}
                  title={project.title}
                  link={project.link}
                  image={project.image}
                  git={project.github}
                />
              )
            })
          }
        </Wrapper>
      </div >
    )
  }
}

export default Portfolio