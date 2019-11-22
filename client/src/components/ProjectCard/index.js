import React from "react";
import './style.css';

const ProjectCard = (props) => {
  return (
    <div className="float-left">
      <div className="btn btn-outline-dark">
        <div className="card-fluid float-left" >
          <div className="card-img" key={props.id}>
            <img className="img-container" alt="" src={props.image} />
            <h3 className="card-title">{props.title}</h3>
            <a className="card-text" href={props.link} style={{fontSize: '25px'}}> Link to Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard