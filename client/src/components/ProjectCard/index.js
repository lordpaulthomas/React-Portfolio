import React from "react";
import './style.css';
import github from './../../images/github.png'

const ProjectCard = (props) => {

  return (
    
    <div className="p-4 bg-light shadow border border-dark outside" >
      <h3 className="card-fluid-title text-dark text-center mt-2" style={{ fontSize: '15px', fontWeight: 'bold' }}>{props.title}</h3>
      <h4 className="card-fluid-title text-dark text-center mt-2" style={{ fontSize: '15px' }}>{props.description}</h4>
      <div className="card" style={{ backgroundColor: `slateblue` }}>
        <div className="btn">

          <div className="card-fluid float-left" >
            <div className="inner"id="pic" >

              <div   className="card-img" key={props.id}>
                <a  target="_blank" rel="noopener noreferrer" className="card-fluid-text text-light"  href={props.link} ><img  className='img-container' src={props.image} alt="" /></a>
             
                <a target="_blank" rel="noopener noreferrer" className="card-fluid-text text-dark" href={props.git} style={{ fontSize: '15px', color: 'black' }}><img src={github} style={{ height: '30px' }} alt=""/>Code</a>
                <a target="_blank" rel="noopener noreferrer" className="card-fluid-text text-dark" href={props.link || props.git} style={{ fontSize: '15px', color: 'black' }}><i class="fa fa-link" aria-hidden="true"></i> Visit site</a>
              </div >


            </div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectCard