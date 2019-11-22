import React, { Component } from "react";
import NavBar from './../../components/NavBar';
import ProjectCard from "./../../components/ProjectCard";
import Wrapper from "./../../components/Wrapper";
import projects from "./../../ProjectData/projectData.json"


class Portfolio extends Component {

  state = {
    projects
  }

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          {
            this.state.projects.map(project => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  link={project.link}
                  image={project.image}
                />
              )
            })
          }
        </Wrapper>
      </div>
    )
  }
}

export default Portfolio