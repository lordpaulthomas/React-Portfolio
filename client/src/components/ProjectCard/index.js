import React from "react";
import './style.css';

const ProjectCard = (props) => {
 
  return (
    <div className="p-4 shadow">
      <div className="float-left" style={{ backgroundColor: `slateblue` }}>
        <div className="btn btn-outline-dark">

          <div className="card-fluid float-left" >
            <div className="inner">
              <div className="card-img" key={props.id}>
                <img className='img-container' src={props.image} alt=""/>
              </div >
            </div>
     
              <h3 className="card-title">{props.title}</h3>
              <a className="card-text" href={props.link} style={{ fontSize: '25px', color: 'lightgray' }}> Link to Site</a><br />
              <a className="card-text" href={props.git} style={{ fontSize: '25px', color: 'lightgray' }}>Link to Code</a>
 
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProjectCard